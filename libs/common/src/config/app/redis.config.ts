import { ConfigModule, ConfigService } from '@nestjs/config';

export const RedisConfigAsync = {
  isGlobal: true,
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    host: configService.get<string>('REDIS_HOST'),
    port: configService.get<string>('REDIS_PORT'),
    password: configService.get<string>('REDIS_PASSWORD'),
    keyPrefix: configService.get<string>('REDIS_PREFIX'),
    db: configService.get<string>('REDIS_DB'),
    retryAttempts: 5,
    retryDelay: 5000,
  }),
};
