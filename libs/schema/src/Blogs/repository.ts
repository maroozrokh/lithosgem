import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { Blog, BlogDocument } from './model';
 
@Injectable()
export class BlogRepository extends BaseRepository<BlogDocument> {
  constructor(
    @InjectModel(Blog.name)
    private model: Model<BlogDocument>,
  ) {
    super(model);
  }

  async addBlog(payload:any) {
    const blog = new this.model(payload);

    // Generate and assign _id for each group
    blog.images.forEach((image:any) => {
      image._id = new Types.ObjectId();

    });

    blog.content.forEach((content:any) => {
      content._id = new Types.ObjectId();

    });


    return await blog.save();
  }

}
