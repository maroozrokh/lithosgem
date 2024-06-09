import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { Index, IndexDocument } from './model';
 
@Injectable()
export class IndexRepository extends BaseRepository<IndexDocument> {
  constructor(
    @InjectModel(Index.name)
    private model: Model<IndexDocument>,
  ) {
    super(model);
  }

  async addIndex(payload:any) {
    const index = new this.model(payload);

    // Generate and assign _id for each group
    index.slider.forEach((image:any) => {
      image._id = new Types.ObjectId();

    });

    index.indexBoresh.forEach((image:any) => {
      image._id = new Types.ObjectId();

    });


    return await index.save();
  }

}
