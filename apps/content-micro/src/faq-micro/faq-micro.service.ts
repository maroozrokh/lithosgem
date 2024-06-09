import {  IBlog, IEditeBlog, IEditeFaq, IEditvisual, IFaq, IFindAllBlog, IFindFAQ, IFindOneByCondition, IFindOneId } from '@libs/interface';
import { AdminRepository, BlogRepository, FaqRepository, ImageRepository, str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import { BlogContentRepository } from '@libs/schema/BlogContent';
//   const newSubItem: IBlog = {};
//   const newMainItem: IAssets_type = {
//   subItems: [newSubItem], // اضافه کردن یک SubItem به MainItem
// };
@Injectable()
export class FaqMicroService {


  constructor(
    private readonly faqRepo: FaqRepository, 
     private readonly adminRepo: AdminRepository) { }




  async addFaq(payload: IFaq) {

    const count = await this.faqRepo.countByCondition(payload._id)
    if(count === 0){
        const faq = await this.faqRepo.create({...payload,isCreated:true});
       
    return (faq);
    }else{
      return BAD_REQUEST('Opps!  FAQ Page was created before');

    }  

  }

  async findFaqById(payload: IFindOneId) {
    const faq = await this.faqRepo.findOneById(payload._id);
    if (!faq) {
      return BAD_REQUEST('Opps! not found faq Page');
    }
    return OK(faq);

  }


  async findOneQA(payload: IFindOneId) {

    const oneFaq = await this.faqRepo.findOneById(payload._id);
    if (!oneFaq) {
      return BAD_REQUEST('Opps! not found Blog');
    }
    return OK(oneFaq);

  }



  async deleteOneQa(payload: IFindOneId) {
    const qa = await this.faqRepo.findOneByCondition({
      _id: str2objectId(payload._id),
    });
    if (!qa) {
      return BAD_REQUEST('Opps! not found blog');
    }
    const deletQa = await this.faqRepo.deleteOne({
      _id: payload._id,
    });

    return OK(!!deletQa?.deletedCount);
  }


  async updateFaq(payload: IEditeFaq) {
  let faq = await this.faqRepo.findOneByCondition({
    _id: str2objectId(payload._id),
  });
    if (!faq) {
      return BAD_REQUEST('Opps! blog not found');
    }
    if ('title' in payload) {
      faq.title = payload?.title;
    }

    if ('metaDescription' in payload) {
      faq.metaDescription = payload?.metaDescription;
    }

    if ('qa' in payload) {
      faq.qa = payload?.qa as any;
    
    }

   

    await faq.save();
    faq = faq.toObject();
    return OK(faq);

  }







}