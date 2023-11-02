import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { BlogContentSchema, BlogContentDocument } from './model';
 
@Injectable()
export class BlogContentRepository extends BaseRepository<BlogContentDocument> {
  constructor(
    @InjectModel("BlogContent")
    private model: Model<BlogContentDocument>,
  ) {
    super(model);
  }
}
