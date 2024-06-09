import { Payload } from '@nestjs/microservices';

import { IBlog,  IEditeBlog, IEditeFaq, IFaq, IFindAllBlog, IFindAllQa, IFindFAQ, IFindOneByCondition, IFindOneId, IQA } from '@libs/interface';
import { Injectable } from '@nestjs/common';
import { FaqProxy } from '@res/common';
import { BlogProxy } from '@res/common/proxy/blog';

@Injectable()
export class FaqService {
  constructor(private readonly faqProxy: FaqProxy) {}
  // addQA(payload: IQA) {
  //   return this.faqProxy.addQa(payload);}
    
  addFAQ(payload: IFaq){
    return this.faqProxy.addFaq(payload);}

  //   findAllQA(payload: IFindAllQa) {
  //   return this.faqProxy.findAllQa(payload);
  // }
  // findOneQA(payload: IFindOneId) {
  //   return this.faqProxy.findOneQa(payload);
  // }
  findFaq(payload: IFindOneId) {
    return this.faqProxy.findFaq(payload);
  }

  // deleteOneQa(payload: IFindOneId) {
  //   return this.faqProxy.deleteQa(payload);
  // }

  updateFaq(payload: IEditeFaq) {
    return this.faqProxy.updateFaq(payload);
  }



}
