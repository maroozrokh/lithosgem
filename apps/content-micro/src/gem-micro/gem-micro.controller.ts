import { Controller, Get } from '@nestjs/common';
import {  GemMicroService } from './gem-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogPattern } from '@res/common/proxy/blog';
import { IBlog,  IEditeBlog,  IEditeGem,  IFindAllBlog, IFindAllGem, IFindOneId, IGem, Ivisual } from '@libs/interface';
import { GemPattern } from '@res/common/proxy/gem';

@Controller()
export class GemMicroController {
  constructor(private readonly gemMicroService: GemMicroService) {}



  @MessagePattern(GemPattern.ADD_GEM)
  addGem(@Payload() payload: IGem) {
    return this.gemMicroService.addGem(payload);
  }


  @MessagePattern(GemPattern.FIND_ALL_GEM)
  findAllBlog(@Payload() payload: IFindAllGem) {
    return this.gemMicroService.findAllGem(payload);
  }

  @MessagePattern(GemPattern.FIND_ONE_GEM)
  findOneBlog(@Payload() payload: IFindOneId) {
    return this.gemMicroService.findOneGem(payload);
  }

  @MessagePattern(GemPattern.DELETE_GEM)
  deleteOneBlog(@Payload() payload: IFindOneId) {
    return this.gemMicroService.deleteOneGem(payload);
  }

  @MessagePattern(GemPattern.UPDATE_IMAGE)
  updateImage(@Payload() payload: any) {
    return this.gemMicroService.updateImages(payload);
  }

  @MessagePattern(GemPattern.UPDATE_GEM)
  updateBlog(@Payload() payload: IEditeGem) {
    return this.gemMicroService.updateGem(payload);
  }


  
  // @MessagePattern(BlogPattern.ADD_IMAGE)
  // addImage(@Payload() payload: Ivisual[]) {
  //   return this.blogMicroService.addImage(payload);
  // }

}
