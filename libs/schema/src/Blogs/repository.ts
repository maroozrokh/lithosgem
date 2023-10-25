import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
