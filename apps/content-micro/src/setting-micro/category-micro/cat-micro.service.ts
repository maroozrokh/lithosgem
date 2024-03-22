import { IOcontent, Ivisual } from '../../../../../libs/interface/src/blog/index';
import { Payload } from '@nestjs/microservices';
import { url } from 'inspector';
import { AddBlogDto } from '../../../../api-gateway/src/blog/dto/add_blog.dto';
import { Type } from 'class-transformer';
import { IAdmin, IBlog, IEditeBlog, IEditeGem, IEditvisual, IFindAllBlog, IFindAllGem, IFindOneByCondition, IFindOneId, IGem } from '@libs/interface';
import { AdminRepository, BlogRepository, GemRepository, ImageRepository, str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import { ICategory, IEditeCategory, IFindAllCat } from '@libs/interface/setting';
import { CatRepository } from '@libs/schema/SettingSchema/Cat';

@Injectable()
export class CatMicroService {


  constructor(
    private readonly catRepo: CatRepository,
     private readonly adminRepo: AdminRepository) { }


  async addCat(payload: ICategory) {
    const cat = await this.catRepo.create(payload);
    return (cat);

  }



  async findAllCat(payload: IFindAllCat) {

    const $match = {};

    if (payload.query) {
      $match['name'] = new RegExp(payload.query, 'ig');
    }
    if (!payload.cat) {
      $match['cat'] = str2objectId(payload.cat?.name || payload?.cat);
    }
    //filter category
    if ('name' in payload) {
      if(typeof payload.name === 'string'){
        $match['name'] = {$in: [payload.name]}
      }else{
        $match['name'] = {$in: payload.name}

      }
      
    }
    const data = await this.catRepo.pagination(
      [{ $match }],
      payload.page,
      payload.count,
      $match,
    );


    return OK(data, true);

  }

  async findOneCat(payload: IFindOneId) {

    const oneCat = await this.catRepo.findOneById(payload._id);
    if (!oneCat) {
      return BAD_REQUEST('Opps! not found CAT');
    }
    return OK(oneCat);

  }

  async deleteOneCat(payload: IFindOneId) {
    const cat = await this.catRepo.findOneById({
      _id: payload._id,
    });
    // console.log(name);
    console.log(cat);
    console.log(payload);
    if (!cat) {
      return BAD_REQUEST('Opps! not found cat');
    }
    const deleteCat = await this.catRepo.deleteOne({
      _id: payload._id,
    });

    return OK(!!deleteCat?.deletedCount);
  }


  async updateCat(payload: IEditeCategory) {
  let cat = await this.catRepo.findOneById({
    _id: str2objectId(payload._id),
  });
    if (!cat) {
      return BAD_REQUEST('Opps! cat not found');
    }
    if ('name' in payload) {
      cat.name = payload?.name;
    }

    if ('typeCat' in payload) {
      cat.typeCat  = payload?.typeCat;

      
    }



  
    

    await cat.save();
    cat = cat.toObject();
    return OK(cat);

  
}



}








