import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
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

  async addGem(payload:any) {
    const gem = new this.model(payload);

    // Generate and assign _id for each group
    gem.images.forEach((image:any) => {
      image._id = new Types.ObjectId();

    });
    return await gem.save();
  }
}
