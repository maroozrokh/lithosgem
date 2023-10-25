import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CacheModule } from '../../cache';
import { AuthHelperService } from './helper';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthCache } from '@res/common/cache/auth.cache';
/**
 * @name AuthModule
 */
@Global()
@Module({   
  imports: [
 
    ConfigModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_EXPIRES_IN') },
      }),
    }),
    CacheModule,
  ],
  providers: [JwtStrategy, AuthHelperService],
  exports: [JwtStrategy, AuthHelperService],
})
export class AuthModule {}
