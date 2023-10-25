import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { Contact, ContactDocument } from './model';
  
@Injectable()
export class ContactRepository extends BaseRepository<ContactDocument> {
  constructor(
    @InjectModel(Contact.name)
    private model: Model<ContactDocument>,
  ) {
    super(model);
  }
}
