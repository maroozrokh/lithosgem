import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { Admin, AdminDocument } from './model';

@Injectable()
export class AdminRepository extends BaseRepository<AdminDocument> {
  constructor(
    @InjectModel(Admin.name)
    private model: Model<AdminDocument>,
  ) {
    super(model);
  }

  //add custom function
}
