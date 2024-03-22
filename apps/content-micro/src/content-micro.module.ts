import { Module } from '@nestjs/common';
import { MongoConfigAsync, SettingProxyModule, setupEnv } from '@res/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '@res/common/decorators/auth';
import { BlogModule } from 'apps/api-gateway/src/blog/blog.module';
import { BlogProxyModule } from '@res/common/proxy/blog';
import { BlogMicroModule } from './blog-micro/blog-micro.module';
import { GemModule } from 'apps/api-gateway/src/gem/gem.module';
import { GemProxyModule } from '@res/common/proxy/gem';
import { GemMicroModule } from './gem-micro/gem-micro.module';
import { AboutProxyModule } from '@res/common/proxy/aboutUs';
import { AboutUsMicroModule } from './aboutUs-micro/aboutUs-micro.module';
import { AboutUsModule } from 'apps/api-gateway/src/contact/aboutUs.module';
import { CatMicroModule } from './setting-micro/category-micro/cat-micro.module';
import { CatModule } from 'apps/api-gateway/src/setting/category/category.module';

@Module({
  imports: [
    
    setupEnv(),
    MongooseModule.forRootAsync(MongoConfigAsync),
    AuthModule,
    BlogModule,
    BlogMicroModule,
    BlogProxyModule,
    GemModule,
    GemProxyModule,
    GemMicroModule,
    AboutProxyModule,
    AboutUsMicroModule,
    AboutUsModule,
    SettingProxyModule,
    CatMicroModule,
    CatModule
  ],

})
export class ContentMicroModule {}
