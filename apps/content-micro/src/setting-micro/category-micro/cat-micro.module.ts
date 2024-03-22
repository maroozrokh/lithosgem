import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminFeature, AdminRepository, ImageFeature, ImageRepository  } from '@libs/schema';
import { CatMicroController } from './cat-micro.controller';
import { CatMicroService } from './cat-micro.service';
import { CatFeature, CatRepository } from '@libs/schema/SettingSchema/Cat';
import { BlogContentFeature, BlogContentRepository } from '@libs/schema/BlogContent';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature,CatFeature,ImageFeature,BlogContentFeature])],
  controllers: [CatMicroController],
  providers: [CatRepository, CatMicroService,AdminRepository,ImageRepository,BlogContentRepository],
})
export class CatMicroModule {}
