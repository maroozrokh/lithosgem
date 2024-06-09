import { AdminRepository,  str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import {  IColor,   IEditeColor,   IFindAllColor, IFindAllMaps, IMaps } from '@libs/interface/setting';
import { ColorRepository } from '@libs/schema/SettingSchema/Color';
import { IFindOneId } from '@libs/interface';
import { MapsRepository } from '@libs/schema/SettingSchema/Maps';

@Injectable()
export class MapsMicroService {


  constructor(
    private readonly mapsRepo: MapsRepository,
     private readonly adminRepo: AdminRepository) { }


  async addMaps(payload: IMaps) {
    const maps = await this.mapsRepo.create(payload);
    return (maps);

  }



  async findAllMaps(payload: IFindAllMaps) {

    const $match = {};

    if (payload.query) {
      $match['name'] = new RegExp(payload.query, 'ig');
    }
    if (!payload.maps) {
      $match['maps'] = str2objectId(payload.maps?._id || payload?.maps);
    }
   
    const data = await this.mapsRepo.pagination(
      [{ $match }],
      payload.page,
      payload.count,
      $match,
    );


    return OK(data, true);

  }

  async findOneMaps(payload: IFindOneId) {

    const oneMaps = await this.mapsRepo.findOneById(payload._id);
    if (!oneMaps) {
      return BAD_REQUEST('Opps! not found Maps');
    }
    return OK(oneMaps);

  }

  async deleteOneMaps(payload: IFindOneId) {
    const maps = await this.mapsRepo.findOneById({
      _id: payload._id,
    });
 
    if (!maps) {
      return BAD_REQUEST('Opps! not found Maps');
    }
    const deleteMaps = await this.mapsRepo.deleteOne({
      _id: payload._id,
    });

    return OK(!!deleteMaps?.deletedCount);
  }


  async updateMaps(payload: IMaps) {
  let maps = await this.mapsRepo.findOneById({
    _id: str2objectId(payload._id),
  });
    if (!maps) {
      return BAD_REQUEST('Opps! maps not found');
    }
    if ('irimage' in payload) {
      maps.irimage = payload?.irimage;
    }

    if ('woimage' in payload) {
      maps.woimage  = payload?.woimage;

      
    }
    if('title' in payload){
      maps.title = payload?.title;
    }



  
    

    await maps.save();
    maps = maps.toObject();
    return OK(maps);

  
}



}








