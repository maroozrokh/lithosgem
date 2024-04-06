
import { IBlog,  IEditeBlog, IFindAllBlog, IFindOneByCondition, IFindOneId } from '@libs/interface';
import { Injectable } from '@nestjs/common';
import { BlogProxy } from '@res/common/proxy/blog';

@Injectable()
export class BlogService {
  constructor(private readonly blogProxy: BlogProxy) {}
  addBlog(payload: IBlog) {
    return this.blogProxy.addBlog(payload);
  }
  findAllBlog(payload: IFindAllBlog) {
    return this.blogProxy.findAllBlog(payload);
  }
  findOneBlog(payload: IFindOneId) {
    return this.blogProxy.findOne(payload);
  }
  findOneBlogByName(payload: IFindOneByCondition) {
    return this.blogProxy.findOneByName(payload);
  }



  deleteOneBlog(payload: IFindOneId) {
    return this.blogProxy.deleteBlog(payload);
  }
  updateBlog(payload: IEditeBlog) {
    return this.blogProxy.updateBlog(payload);
  }

    async editeImage(payload:any){

    return this.blogProxy.updateImage(payload);

  
  
  }


}
