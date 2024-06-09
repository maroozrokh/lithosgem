import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepository } from '../Base/base.repository';
import {  GalleryDocument, IimageScheme } from './model';
import { Model } from 'mongoose';
 
@Injectable()
export class GalleryRepository extends BaseRepository<GalleryDocument> {

  constructor(
    @InjectModel(IimageScheme.name)
    private model: Model<GalleryDocument>,
  ) {
    super(model);
  }

  

}
