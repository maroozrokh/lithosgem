import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { AboutUs, AboutUsDocument } from './model';


@Injectable()
export class AboutUsRepository extends BaseRepository<AboutUsDocument> {
  constructor(
    @InjectModel(AboutUs.name)
    private model: Model<AboutUsDocument>,
  ) {
    super(model);
  }
}
