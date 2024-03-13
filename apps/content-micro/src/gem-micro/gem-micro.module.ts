import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminFeature, AdminRepository, BlogFeature, BlogRepository, GemFeature, GemRepository, ImageFeature, ImageRepository } from '@libs/schema';
import { BlogContentFeature, BlogContentRepository } from '@libs/schema/BlogContent';
import { GemMicroController } from './gem-micro.controller';
import { GemMicroService } from './gem-micro.service';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature, GemFeature,ImageFeature,BlogContentFeature])],
  controllers: [GemMicroController],
  providers: [GemMicroService,GemRepository,AdminRepository,ImageRepository,BlogContentRepository],
})
export class GemMicroModule {}
