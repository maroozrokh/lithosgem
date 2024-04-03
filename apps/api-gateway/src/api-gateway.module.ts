import { ThrottlerModule } from '@nestjs/throttler';
import { Module } from '@nestjs/common';
import { AdminProxyModule, setupEnv } from '@res/common';
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
import { AdminModule } from './admin/admin.module';
import { ColorModule } from './setting/colors/colormodule';
import { EmailProxyModule } from '@res/common/email';


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
    CatModule,
    ColorModule,
    AdminModule,
    AdminProxyModule,
    // EmailProxyModule,
    AuthModule,

  ],
  providers: [ThrottlerService],
})
export class ApiGatewayModule {}
