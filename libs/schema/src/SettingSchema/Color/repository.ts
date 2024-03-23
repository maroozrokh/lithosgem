import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../Base/base.repository';
import { Color, ColorDocument } from './model';


@Injectable()
export class ColorRepository extends BaseRepository<ColorDocument> {
  constructor(
    @InjectModel(Color.name)
    private model: Model<ColorDocument>,
  ) {
    super(model);
  }
}
