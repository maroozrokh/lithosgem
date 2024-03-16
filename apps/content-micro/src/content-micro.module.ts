import { Module } from '@nestjs/common';
import { MongoConfigAsync, setupEnv } from '@res/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '@res/common/decorators/auth';
import { BlogModule } from 'apps/api-gateway/src/blog/blog.module';
import { BlogProxy, BlogProxyModule } from '@res/common/proxy/blog';
import { BlogMicroModule } from './blog-micro/blog-micro.module';
import { GemModule } from 'apps/api-gateway/src/gem/gem.module';
import { GemProxyModule } from '@res/common/proxy/gem';
import { ConfigModule } from '@nestjs/config';
import { GemMicroModule } from './gem-micro/gem-micro.module';
import { AboutProxyModule } from '@res/common/proxy/aboutUs';
import { AboutUsController } from 'apps/api-gateway/src/contact/aboutUs.controller';
import { AboutUsMicroModule } from './aboutUs-micro/aboutUs-micro.module';
import { AboutUsModule } from 'apps/api-gateway/src/contact/aboutUs.module';

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
    AboutUsModule
  ],

})
export class ContentMicroModule {}
