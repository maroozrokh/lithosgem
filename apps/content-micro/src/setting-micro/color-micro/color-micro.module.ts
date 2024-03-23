import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminFeature, AdminRepository, ImageFeature, ImageRepository  } from '@libs/schema';
import { ColorFeature, ColorRepository } from '@libs/schema/SettingSchema/Color';
import { ColorMicroController } from './color-micro.controller';
import { ColorMicroService } from './color-micro.service';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature,ColorFeature])],
  controllers: [ColorMicroController],
  providers: [ColorRepository, ColorMicroService,AdminRepository],
})
export class ColorMicroModule {}
