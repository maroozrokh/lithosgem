import { Controller } from '@nestjs/common';
import {  MapsMicroService } from './maps-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SettingPattern } from '@res/common';
import {  IColor,  IEditeColor, IMaps } from '@libs/interface/setting';
import {  IFindOneId } from '@libs/interface';

@Controller()
export class MapsMicroController {
  constructor(private readonly mapsMecroService: MapsMicroService) {}



  @MessagePattern(SettingPattern.ADD_MAPS)
  addMaps(@Payload() payload: IMaps) {
    return this.mapsMecroService.addMaps(payload);
  }


  @MessagePattern(SettingPattern.FIND_ALL_MAPS)
  findAllMaps(@Payload() payload: any) {
    return this.mapsMecroService.findAllMaps(payload);
  }

  @MessagePattern(SettingPattern.FIND_ONE_MAPS)
  findOneMaps(@Payload() payload: IFindOneId) {
    return this.mapsMecroService.findOneMaps(payload);
  }

  @MessagePattern(SettingPattern.DELETE_MAPS)
  deleteOneMaps(@Payload() payload: IFindOneId) {
    return this.mapsMecroService.deleteOneMaps(payload);
  }

  @MessagePattern(SettingPattern.UPDATE_MAPS)
  updateMaps(@Payload() payload: IMaps) {
    return this.mapsMecroService.updateMaps(payload);
  }




}
