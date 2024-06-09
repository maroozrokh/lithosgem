import { Controller, Get } from '@nestjs/common';
import {  GemMicroService } from './gem-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogPattern } from '@res/common/proxy/blog';
import { IBlog,  IEditeBlog,  IEditeGem,  IFindAllBlog, IFindAllGem, IFindOneId, IGem, IAssets_type, IFindOneByCondition } from '@libs/interface';
import { GemPattern } from '@res/common/proxy/gem';

@Controller()
export class GemMicroController {
  constructor(private readonly gemMicroService: GemMicroService) {}



  @MessagePattern(GemPattern.ADD_GEM)
  addGem(@Payload() payload: IGem) {
    return this.gemMicroService.addGem(payload);
  }


  @MessagePattern(GemPattern.FIND_ALL_GEM)
  findAllGem(@Payload() payload: IFindAllGem) {
    return this.gemMicroService.findAllGem(payload);
  }

  @MessagePattern(GemPattern.FIND_ONE_GEM)
  findOneGem(@Payload() payload: IFindOneId) {
    return this.gemMicroService.findOneGem(payload);
  }


  @MessagePattern(GemPattern.FIND_ONE_GEM_BY_NAME)
  findOneGemByName(@Payload() payload: IFindOneByCondition) {
    return this.gemMicroService.findOneGemByName(payload);
  }
  @MessagePattern(GemPattern.DELETE_GEM)
  deleteOneGem(@Payload() payload: IFindOneId) {
    return this.gemMicroService.deleteOneGem(payload);
  }


  @MessagePattern(GemPattern.DELETE_BORESH)
  deleteBoreshGem(@Payload() payload: IFindOneId) {
    return this.gemMicroService.deleteGemBoresh(payload);
  }
 

  @MessagePattern(GemPattern.UPDATE_GEM)
  updateGem(@Payload() payload: IEditeGem) {
    return this.gemMicroService.updateGem(payload);
  }

 // @MessagePattern(GemPattern.UPDATE_IMAGE)
  // updateImage(@Payload() payload: any) {
  //   return this.gemMicroService.updateImages(payload);
  // }
  
  // @MessagePattern(BlogPattern.ADD_IMAGE)
  // addImage(@Payload() payload: IAssets_type[]) {
  //   return this.blogMicroService.addImage(payload);
  // }

}
