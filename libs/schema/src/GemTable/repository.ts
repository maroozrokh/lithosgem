import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import {  GemTable, GemTableDocument } from './model';
 
@Injectable()
export class GemTableRepository extends BaseRepository<GemTableDocument> {

  constructor(
    @InjectModel(GemTable.name)
    private model: Model<GemTableDocument>,
  ) {
    super(model);
  }


 
}
