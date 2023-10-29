import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import {  ImageDocument, ImageSchima } from './model';
 
@Injectable()
export class ImageRepository extends BaseRepository<ImageDocument> {
  constructor(
    @InjectModel(ImageSchima.name)
    private model: Model<ImageDocument>,
  ) {
    super(model);
  }
}
