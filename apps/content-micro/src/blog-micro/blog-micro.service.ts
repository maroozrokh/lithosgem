import { IAdmin, IBlog, IFindAllBlog } from '@libs/interface';
import { AdminRepository, BlogRepository, str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import { BlogProxy } from '@res/common/proxy/blog';

@Injectable()
export class BlogMicroService {

  
  constructor(
    private readonly blogRepo: BlogRepository,  private readonly adminRepo: AdminRepository) {}
    
  async addBlog(payload: IBlog) {
    // const admin = await this.adminRepo.findOneById(payload.admin._id);
    // if (!admin) {
    //   return BAD_REQUEST('Opps! not found admin');
    // }
    const blog = await this.blogRepo.create({
      ...payload,
      // admin: payload.admin._id,
    });
    if (!blog) {
      return BAD_REQUEST('Opps! not create blog');
    }
   await blog.save();
    // return OK(blog._id);
    return OK(blog,true);
  }

  async findAllBlog(payload: IFindAllBlog) {

    const $match = {};
 
    if (payload.query) {
      $match['name'] = new RegExp(payload.query, 'ig');
     }
    if (!payload.blog) {
      $match['blog'] = str2objectId(payload.blog?._id || payload?.blog);
    } 
    console.log(payload.blog)
    console.log(payload.blog)
    console.log({...payload})
    const data = await this.blogRepo.pagination(
      [{ $match }],
      payload.page,
      payload.count,
      $match,
    );
    

    return OK(data, true);






  //   const $match = {};
  //   if (payload.query) {
  //     $match['name'] = new RegExp(payload.query, 'ig');
  //   }
  //   const data = await this.blogRepo.pagination(
  //     [
  //       { $match },
   
  //     ],
  //     payload.page,
  //     payload.count,
  //     $match,
  //   );
  //   return OK(data, true);
  }

}


