import { Inject, Injectable } from '@nestjs/common';
 import { AProxy } from '../base/proxy-service';
import { FaqPattern } from './enum';
import { IBlog, IEditeBlog,IEditeFaq,IFaq,IFindAllQa,IFindFAQ,IFindOneId, IQA } from '@libs/interface';
 
 

@Injectable()
export class FaqProxy extends AProxy<FaqProxy> {

  constructor(@Inject(FaqPattern.NAME) faqProxy: FaqProxy) {
    super(faqProxy);
  }
  findAllQa(payload: IFindAllQa) {
    return this.send(FaqPattern.FIND_ALL_QA, payload);
  }
  findFaq(payload: IFindOneId) {
    return this.send(FaqPattern.FIND_ONE_FAQ, payload);
  }

  findOneQa(payload: IFindOneId) {
    return this.send(FaqPattern.FIND_ONE_QA, payload);
  }


  updateFaq(payload: IEditeFaq) {
    return this.send(FaqPattern.UPDATE_FAQ, payload);
  }



  deleteFaq(payload: IFindOneId) {
    return this.send(FaqPattern.DELETE_FQA, payload);
  }

  deleteQa(payload: IFindOneId) {
    return this.send(FaqPattern.DELETE_QA, payload);
  }

  addFaq(payload: IFaq) {
    return this.send(FaqPattern.ADD_FAQ, payload);
  }

  addQa(payload: IQA) {
    return this.send(FaqPattern.ADD_QA, payload);
  }



 
}
