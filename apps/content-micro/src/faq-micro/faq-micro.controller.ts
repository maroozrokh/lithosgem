import { Controller, Get } from '@nestjs/common';
import { FaqMicroService } from './faq-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogPattern } from '@res/common/proxy/blog';
import { IBlog,  IEditeBlog,  IEditeFaq,  IFaq,  IFindAllBlog, IFindFAQ, IFindOneByCondition, IFindOneId } from '@libs/interface';
import { FaqPattern } from '@res/common';

@Controller()
export class FaqMicroController {
  constructor(private readonly faqMicroService: FaqMicroService) {}


  @MessagePattern(FaqPattern.ADD_FAQ)
  addFaq(@Payload() payload: IFaq) {
    return this.faqMicroService.addFaq(payload);
  }


  @MessagePattern(FaqPattern.FIND_ONE_FAQ)
  findAllFaq(@Payload() payload: IFindOneId) {
    return this.faqMicroService.findFaqById(payload);
  }

  // @MessagePattern(FaqPattern.FIND_ONE_QA)
  // findOneQA(@Payload() payload: IFindOneId) {
  //   return this.faqMicroService.findOneQA(payload);
  // }



  // @MessagePattern(FaqPattern.DELETE_QA)
  // deleteOneQA(@Payload() payload: IFindOneId) {
  //   return this.faqMicroService.deleteOneQa(payload);
  // }



  @MessagePattern(FaqPattern.UPDATE_FAQ)
  updateFaq(@Payload() payload: IEditeFaq) {
    return this.faqMicroService.updateFaq(payload);
  }



}
