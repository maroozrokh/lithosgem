import { ThrottlerModule } from '@nestjs/throttler';
import { Module } from '@nestjs/common';
import { setupEnv } from '@res/common';
import { BlogProxyModule } from '@res/common/proxy/blog';
import { AuthModule } from '@res/common/decorators/auth';
import { ThrottlerConfigAsync, ThrottlerService } from '@res/common/config/app/throttler.config';
import { BlogModule } from './blog/blog.module';
import { GemModule } from './gem/gem.module';
import { GemProxyModule } from '@res/common/proxy/gem';
import { AboutUsModule } from './contact/aboutUs.module';
import { AboutProxyModule } from '@res/common/proxy/aboutUs';
import { SettingProxyModule } from '@res/common/proxy/setting';
import { CatModule } from './setting/category/category.module';


@Module({
  imports: [
    setupEnv(),
    ThrottlerModule.forRootAsync({
      ...ThrottlerConfigAsync,
    }),
     AuthModule, 
     BlogProxyModule,
    BlogModule,
    GemModule,
    GemProxyModule,
    AboutUsModule,
    AboutProxyModule,
    SettingProxyModule,
    CatModule

  ],
  providers: [ThrottlerService],
})
export class ApiGatewayModule {}
