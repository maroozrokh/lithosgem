import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
export const ThrottlerConfigAsync = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    ttl: config.get('THROTTLER_TTL'),
    limit: config.get('THROTTLER_LIMIT'),
  }),
};
export const ThrottlerService = {
  provide: APP_GUARD,
  useClass: ThrottlerGuard,
};
