import { ThrottlerModule } from '@nestjs/throttler';
import { Module } from '@nestjs/common';
import { ClientProxyModule, setupEnv } from '@res/common';
import { BlogProxyModule } from '@res/common/proxy/blog';
import { AuthModule } from '@res/common/decorators/auth';
import { ThrottlerConfigAsync, ThrottlerService } from '@res/common/config/app/throttler.config';
import { BlogModule } from './blog/blog.module';


@Module({
  imports: [
    setupEnv(),
    ThrottlerModule.forRootAsync({
      ...ThrottlerConfigAsync,
    }),
    BlogProxyModule,
    BlogModule,
    AuthModule,

  ],
  providers: [ThrottlerService],
})
export class ApiGatewayModule {}
