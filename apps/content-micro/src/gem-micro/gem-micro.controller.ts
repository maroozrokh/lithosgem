import { Controller, Get } from '@nestjs/common';
import { BlogMicroService } from './gem-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogPattern } from '@res/common/proxy/blog';
import { IBlog,  IEditeBlog,  IFindAllBlog, IFindOneId, Ivisual } from '@libs/interface';

@Controller()
export class GemMicroController {
  constructor(private readonly gemMicroService: GemMicroService) {}



  @MessagePattern(BlogPattern.ADD_BLOG)
  addBlog(@Payload() payload: IBlog) {
    return this.blogMicroService.addBlog(payload);
  }


  @MessagePattern(BlogPattern.FIND_ALL_BLOG)
  findAllBlog(@Payload() payload: IFindAllBlog) {
    return this.blogMicroService.findAllBlog(payload);
  }

  @MessagePattern(BlogPattern.FIND_ONE_BLOG)
  findOneBlog(@Payload() payload: IFindOneId) {
    return this.blogMicroService.findOneBlog(payload);
  }

  @MessagePattern(BlogPattern.DELETE_BLOG)
  deleteOneBlog(@Payload() payload: IFindOneId) {
    return this.blogMicroService.deleteOneBlog(payload);
  }

  @MessagePattern(BlogPattern.UPDATE_IMAGE)
  updateImage(@Payload() payload: any) {
    return this.blogMicroService.updateImages(payload);
  }

  @MessagePattern(BlogPattern.UPDATE_BLOG)
  updateBlog(@Payload() payload: IEditeBlog) {
    return this.blogMicroService.updateBlog(payload);
  }


  
  // @MessagePattern(BlogPattern.ADD_IMAGE)
  // addImage(@Payload() payload: Ivisual[]) {
  //   return this.blogMicroService.addImage(payload);
  // }

}
