import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutUsFeature, AboutUsRepository, AdminFeature, AdminRepository, BlogFeature, BlogRepository, GemFeature, GemRepository, ImageFeature, ImageRepository } from '@libs/schema';
import { BlogContentFeature, BlogContentRepository } from '@libs/schema/BlogContent';
import { AboutUsMicroController } from './aboutUs-micro.controller';
import { AboutUsMicroService } from './aboutUs-micro.service';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature, AboutUsFeature,ImageFeature,BlogContentFeature])],
  controllers: [AboutUsMicroController],
  providers: [AboutUsMicroService,AdminRepository,ImageRepository,BlogContentRepository,AboutUsRepository],
})
export class AboutUsMicroModule {}
