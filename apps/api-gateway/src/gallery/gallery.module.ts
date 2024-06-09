import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import {   GalleryController } from './gallery.controller';
import {   GalleryService, SearchService } from './gallery.service';

 
@Module({
  imports: [CacheModule],
  // imports: [CacheModule.register(),ConfigModule],

  controllers: [GalleryController],
  providers: [GalleryService,SearchService],
})
export class GalleryModule {}
