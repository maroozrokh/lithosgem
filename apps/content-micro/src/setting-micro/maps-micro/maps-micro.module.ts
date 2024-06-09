import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminFeature, AdminRepository, ImageFeature, ImageRepository  } from '@libs/schema';
import { MapsFeature, MapsRepository } from '@libs/schema/SettingSchema/Maps';
import { MapsMicroController } from './maps-micro.controller';
import { MapsMicroService } from './maps-micro.service';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature, MapsFeature])],
  controllers: [MapsMicroController],
  providers: [MapsRepository, MapsMicroService,AdminRepository],
})
export class MapsMicroModule {}
