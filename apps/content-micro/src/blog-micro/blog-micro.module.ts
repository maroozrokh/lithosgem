import { Module } from '@nestjs/common';
import { BlogMicroController } from './blog-micro.controller';
import { BlogMicroService } from './blog-micro.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminFeature, AdminRepository, BlogFeature, BlogRepository } from '@libs/schema';
import { BlogProxy, BlogProxyModule } from '@res/common/proxy/blog';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature, BlogFeature])],
  controllers: [BlogMicroController],
  providers: [BlogMicroService,BlogRepository,AdminRepository],
})
export class BlogMicroModule {}
