import { Module } from '@nestjs/common';
import { BlogMicroController } from './blog-micro.controller';
import { BlogMicroService } from './blog-micro.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminFeature, AdminRepository, BlogFeature, BlogRepository, ImageFeature, ImageRepository } from '@libs/schema';
import { BlogProxy, BlogProxyModule } from '@res/common/proxy/blog';
import { BlogContentFeature, BlogContentRepository } from '@libs/schema/BlogContent';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature, BlogFeature,ImageFeature,BlogContentFeature])],
  controllers: [BlogMicroController],
  providers: [BlogMicroService,BlogRepository,AdminRepository,ImageRepository,BlogContentRepository],
})
export class BlogMicroModule {}
