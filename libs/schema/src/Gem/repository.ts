import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { Gem, GemDocument } from './model';
 
@Injectable()
export class GemRepository extends BaseRepository<GemDocument> {
  constructor(
    @InjectModel(Gem.name)
    private model: Model<GemDocument>,
  ) {
    super(model);
  }
}
