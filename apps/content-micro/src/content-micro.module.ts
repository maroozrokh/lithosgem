import { Module } from '@nestjs/common';
import { MongoConfigAsync, setupEnv } from '@res/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '@res/common/decorators/auth';
import { BlogModule } from 'apps/api-gateway/src/blog/blog.module';
import { BlogProxy, BlogProxyModule } from '@res/common/proxy/blog';
import { BlogMicroModule } from './blog-micro/blog-micro.module';

@Module({
  imports: [
    setupEnv(),
    MongooseModule.forRootAsync(MongoConfigAsync),
    AuthModule,
    BlogModule,
    BlogMicroModule,
    BlogProxyModule
  ],

})
export class ContentMicroModule {}
