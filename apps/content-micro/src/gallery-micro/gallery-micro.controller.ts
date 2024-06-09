import { Controller } from '@nestjs/common';
import {  GalleryMicroService } from './gallery-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogPattern } from '@res/common/proxy/blog';
import { IBlog,  IEditeBlog,  IEditeGem,  IFindAllBlog, IFindAllGem, IFindOneId, IGem, IAssets_type, IFindOneByCondition } from '@libs/interface';
import { GemPattern } from '@res/common/proxy/gem';
import { GalleryPattern } from '@res/common/proxy/gallery';
import { IFindAllVideos } from '@libs/interface/gallery';

@Controller()
export class GalleryMicroController {
  constructor(private readonly galleryMicroService: GalleryMicroService) {}





  @MessagePattern(GalleryPattern.FIND_ALL_VIDEOS)
  findAllVideos(@Payload() payload: IFindAllVideos ) {
    return this.galleryMicroService.findAllVideos(payload);
  }


  




}
