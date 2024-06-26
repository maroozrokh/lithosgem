import { Inject, Injectable } from '@nestjs/common';
 import { AProxy } from '../base/proxy-service';
import { BlogPattern } from './enum';
import { IBlog, IEditeBlog,IFindAllBlog, IFindOneByCondition, IFindOneId } from '@libs/interface';
 
 

@Injectable()
export class BlogProxy extends AProxy<BlogProxy> {
  // findOneById(_id: any) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(@Inject(BlogPattern.NAME) blogProxy: BlogProxy) {
    super(blogProxy);
  }
  findAllBlog(payload: IFindAllBlog) {
    return this.send(BlogPattern.FIND_ALL_BLOG, payload);
  }
  findOne(payload: IFindOneId) {
    return this.send(BlogPattern.FIND_ONE_BLOG, payload);
  }

  findOneByName(payload: IFindOneByCondition) {
    return this.send(BlogPattern.FIND_ONE_BLOG_BY_NAME, payload);
  }


  updateBlog(payload: IEditeBlog) {
    return this.send(BlogPattern.UPDATE_BLOG, payload);
  }


  deleteBlog(payload: IFindOneId) {
    return this.send(BlogPattern.DELETE_BLOG, payload);
  }

  addBlog(payload: IBlog) {
    return this.send(BlogPattern.ADD_BLOG, payload);
  }


  updateImage(payload: any) {
    return this.send(BlogPattern.UPDATE_IMAGE, payload);
  }

  

  // addImage(payload: IAssets_type) {
  //   return this.send(BlogPattern.ADD_IMAGE, payload);
  // }
 
}
