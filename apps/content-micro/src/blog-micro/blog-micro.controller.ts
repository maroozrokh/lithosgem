import { Controller, Get } from '@nestjs/common';
import { BlogMicroService } from './blog-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogPattern } from '@res/common/proxy/blog';
import { IBlog,  IEditeBlog,  IFindAllBlog, IFindOneId } from '@libs/interface';

@Controller()
export class BlogMicroController {
  constructor(private readonly blogMicroService: BlogMicroService) {}



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

  @MessagePattern(BlogPattern.UPDATE_BLOG)
  updateBlog(@Payload() payload: IEditeBlog) {
    return this.blogMicroService.updateBlog(payload);
  }

}
