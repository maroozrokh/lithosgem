
import { IBlog, IEditBlog, IFindAllBlog, IFindOneId } from '@libs/interface';
import { Injectable } from '@nestjs/common';
import { BlogProxy } from '@res/common/proxy/blog';
import { ok } from 'assert';

@Injectable()
export class BlogService {
  constructor(private readonly blogProxy: BlogProxy) {}
  addBlog(payload: IBlog) {
    return this.blogProxy.addBlog(payload);
  }
  printTest(){
    return 'test';
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
  deleteBlog(payload: IFindOneId) {
    return this.blogProxy.deleteBlog(payload);
  }

}
