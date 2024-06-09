import { GalleryMicroService } from './gallery-micro.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminFeature, AdminRepository, BlogFeature, BlogRepository, GemFeature, GemRepository } from '@libs/schema';
import { GalleryFeature, GalleryRepository } from '@libs/schema/Gallery';
import { GalleryMicroController } from './gallery-micro.controller';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature, GalleryFeature, GemFeature, BlogFeature])],
  controllers: [GalleryMicroController],
  providers: [GalleryMicroService, AdminRepository,GalleryRepository, BlogRepository, GemRepository],
})
export class GalleryMicroModule {}
