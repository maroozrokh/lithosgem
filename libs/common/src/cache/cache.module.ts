import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule as CM, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { AuthCache } from './auth.cache';

/**
 * CacheModule
 */
@Global()
@Module({
  imports: [
    
    ConfigModule,
    CM.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          isGlobal: true,
          store: (await redisStore({
            ttl: 100,
            url: configService.getOrThrow('REDIS_URL_CACHE'),
          })) as unknown as CacheStore,
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AuthCache],
  exports: [CM,AuthCache],
})
export class CacheModule { }
