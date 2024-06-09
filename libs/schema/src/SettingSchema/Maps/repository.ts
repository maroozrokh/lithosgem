import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../Base/base.repository';
import { Maps, MapsDocument } from './model';


@Injectable()
export class MapsRepository extends BaseRepository<MapsDocument> {
  constructor(
    @InjectModel(Maps.name)
    private model: Model<MapsDocument>,
  ) {
    super(model);
  }
}
