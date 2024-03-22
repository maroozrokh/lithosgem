import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../Base/base.repository';
import { CatDocument, Category } from './model';


@Injectable()
export class CatRepository extends BaseRepository<CatDocument> {
  constructor(
    @InjectModel(Category.name)
    private model: Model<CatDocument>,
  ) {
    super(model);
  }
}
