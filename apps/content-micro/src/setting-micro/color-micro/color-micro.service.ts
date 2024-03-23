import { AdminRepository,  str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import {  IColor,   IEditeColor,   IFindAllColor } from '@libs/interface/setting';
import { ColorRepository } from '@libs/schema/SettingSchema/Color';
import { IFindOneId } from '@libs/interface';

@Injectable()
export class ColorMicroService {


  constructor(
    private readonly colorRepo: ColorRepository,
     private readonly adminRepo: AdminRepository) { }


  async addColor(payload: IColor) {
    const color = await this.colorRepo.create(payload);
    return (color);

  }



  async findAllColor(payload: IFindAllColor) {

    const $match = {};

    if (payload.query) {
      $match['name'] = new RegExp(payload.query, 'ig');
    }
    if (!payload.color) {
      $match['color'] = str2objectId(payload.color?._id || payload?.color);
    }
    // //filter category
    // if ('name' in payload) {
    //   if(typeof payload.name === 'string'){
    //     $match['name'] = {$in: [payload.name]}
    //   }else{
    //     $match['name'] = {$in: payload.name}

    //   }
      
    // }
    const data = await this.colorRepo.pagination(
      [{ $match }],
      payload.page,
      payload.count,
      $match,
    );


    return OK(data, true);

  }

  async findOneColor(payload: IFindOneId) {

    const oneColor = await this.colorRepo.findOneById(payload._id);
    if (!oneColor) {
      return BAD_REQUEST('Opps! not found COLOR');
    }
    return OK(oneColor);

  }

  async deleteOneColor(payload: IFindOneId) {
    const color = await this.colorRepo.findOneById({
      _id: payload._id,
    });
 
    if (!color) {
      return BAD_REQUEST('Opps! not found Color');
    }
    const deleteColor = await this.colorRepo.deleteOne({
      _id: payload._id,
    });

    return OK(!!deleteColor?.deletedCount);
  }


  async updateColor(payload: IEditeColor) {
  let color = await this.colorRepo.findOneById({
    _id: str2objectId(payload._id),
  });
    if (!color) {
      return BAD_REQUEST('Opps! color not found');
    }
    if ('colorName' in payload) {
      color.colorName = payload?.colorName;
    }

    if ('colorCode' in payload) {
      color.colorCode  = payload?.colorCode;

      
    }



  
    

    await color.save();
    color = color.toObject();
    return OK(color);

  
}



}








