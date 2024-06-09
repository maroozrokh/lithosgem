import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {   AdminFeature, AdminRepository,    BlogFeature,    BlogRepository,    GemFeature,    GemRepository } from '@libs/schema';
import {  IndexMicroController } from './index-micro.controller';
import { IndexFeature, IndexRepository } from '@libs/schema/IndexSchema';
import { IndexMicroService } from './index-micro.service';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature, IndexFeature,BlogFeature,GemFeature])],
  controllers: [IndexMicroController],
  providers: [IndexMicroService,AdminRepository,IndexRepository,BlogRepository,GemRepository],
})
export class indexMicroModule {}
