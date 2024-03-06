import { ThrottlerModule } from '@nestjs/throttler';
import { Module } from '@nestjs/common';
import { setupEnv } from '@res/common';
import { BlogProxyModule } from '@res/common/proxy/blog';
import { AuthModule } from '@res/common/decorators/auth';
import { ThrottlerConfigAsync, ThrottlerService } from '@res/common/config/app/throttler.config';
import { BlogModule } from './blog/blog.module';
import { GemModule } from './gem/gem.module';
import { GemProxyModule } from '@res/common/proxy/gem';


@Module({
  imports: [
    setupEnv(),
    ThrottlerModule.forRootAsync({
      ...ThrottlerConfigAsync,
    }),
    BlogProxyModule,
    BlogModule,
    AuthModule,
    GemModule,
    GemProxyModule

  ],
  providers: [ThrottlerService],
})
export class ApiGatewayModule {}
