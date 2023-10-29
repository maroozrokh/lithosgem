
import { IBlog,  IEditeBlog, IFindAllBlog, IFindOneId, Ivisual } from '@libs/interface';
import { Injectable } from '@nestjs/common';
import { BlogProxy } from '@res/common/proxy/blog';
import { ok } from 'assert';

@Injectable()
export class BlogService {
  constructor(private readonly blogProxy: BlogProxy) {}
  addBlog(payload: IBlog) {
    return this.blogProxy.addBlog(payload);
  }


  // editeBlog(payload: IEditBlog) {
  //   return this.blogProxy.editeBlog(payload);
  // }

  findAllBlog(payload: IFindAllBlog) {
    return this.blogProxy.findAllBlog(payload);
  }
  findOneBlog(payload: IFindOneId) {
    return this.blogProxy.findOne(payload);
  }
  deleteOneBlog(payload: IFindOneId) {
    return this.blogProxy.deleteBlog(payload);
  }

  updateBlog(payload: IEditeBlog) {
    return this.blogProxy.updateBlog(payload);
  }


  // addImage(payload: Ivisual) {
  //   return this.blogProxy.addImage(payload);
  // }

}
