import { Payload } from '@nestjs/microservices';

import {  AdminRepository, BlogRepository, GemRepository, str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import { IndexRepository } from '@libs/schema/IndexSchema';
import { IEditedIndex,  IindexType } from '@libs/interface/indexInterface';
import { IFindAllBlog, IFindNewestBlog, IFindNewestGem, IFindOneId } from '@libs/interface';
import { filter } from 'rxjs';

@Injectable()
export class IndexMicroService {


  constructor(
    private readonly indexRepo: IndexRepository,
     private readonly adminRepo: AdminRepository,
     private readonly blogRepo: BlogRepository,
     private readonly gemRepo: GemRepository) { }



   

  async addIndex(payload: IindexType) {
     const count = await this.indexRepo.countByCondition(payload._id)
      if(count === 0){
          const index = await this.indexRepo.create({...payload,isCreated:true});
         
      return (index);
      }else{
        return BAD_REQUEST('Opps!  Index Page was created before');

      }  

  }




  async findIndexById(payload: IFindOneId) {
    const indexPage = await this.indexRepo.findOneById(payload._id);
    if (!indexPage) {
      return BAD_REQUEST('Opps! not found index Page');
    }
    return OK(indexPage);

  }




  async updateIndexPage(payload: IEditedIndex) {
  let index = await this.indexRepo.findOneByCondition({
    _id: str2objectId(payload._id),
  });
    if (!index) {
      return BAD_REQUEST('Opps! index not found');
    }
    if ('title' in payload) {
      index.title = payload?.title;
    }

 
    if ('metaDescription' in payload) {
      index.metaDescription = payload?.metaDescription;
    }

    if ('indexExpert' in payload) {
      const indexExpert = index.indexExpert || { text: '', image:{ url: '', alt: '', name: '', link: '' } }

      if (payload.indexExpert.text) {
        indexExpert.text = payload?.indexExpert.text;

      }
      if (payload.indexExpert.image) {
        indexExpert.image = payload?.indexExpert.image;

      }
      
      index.indexExpert = indexExpert;

    }

    if('whyUs' in payload){
      index.whyUs = payload?.whyUs;
    }
    if('indexBoresh' in payload){
      index.indexBoresh = payload?.indexBoresh;
    }



    

    await index.save();
    index = index.toObject();
    return OK(index);

  
}



  
  async findLatestBlogIndex() {
    console.log('hi');
      const posts = await this.blogRepo
        .findAll()
        .sort({ createdAt: -1 })
        .limit(3)
        .exec();
      return posts;
    }


    async findLatestGemIndex() {
      const gems = await this.gemRepo
        .findAll()
        .sort({ createdAt: -1 })
        .limit(5)
        .exec();
      return gems;
    }


  }



















