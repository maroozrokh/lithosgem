import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { FaqDocument, Faq, FAQ } from './model';
 
@Injectable()
export class FaqRepository extends BaseRepository<FaqDocument> {
  constructor(
    @InjectModel(Faq.name)
    private model: Model<FaqDocument>,
  ) {
    super(model);
  }
}
