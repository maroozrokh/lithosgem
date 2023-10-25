import { Controller, Get } from '@nestjs/common';
import { BlogMicroService } from './blog-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogPattern } from '@res/common/proxy/blog';
import { IBlog, IFindAllBlog } from '@libs/interface';

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

}
