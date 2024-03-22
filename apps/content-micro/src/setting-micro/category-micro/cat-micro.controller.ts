import { Controller, Get } from '@nestjs/common';
import {  CatMicroService } from './cat-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SettingPattern } from '@res/common';
import { ICategory, IEditeCategory } from '@libs/interface/setting';
import { IFindOneByCondition, IFindOneId } from '@libs/interface';

@Controller()
export class CatMicroController {
  constructor(private readonly catMecroService: CatMicroService) {}



  @MessagePattern(SettingPattern.ADD_CAT)
  addCat(@Payload() payload: ICategory) {
    return this.catMecroService.addCat(payload);
  }


  @MessagePattern(SettingPattern.FIND_ALL_CAT)
  findAllCat(@Payload() payload: any) {
    return this.catMecroService.findAllCat(payload);
  }

  @MessagePattern(SettingPattern.FIND_ONE_CAT)
  findOneCat(@Payload() payload: IFindOneId) {
    return this.catMecroService.findOneCat(payload);
  }

  @MessagePattern(SettingPattern.DELETE_CAT)
  deleteOneCat(@Payload() payload: IFindOneId) {
    return this.catMecroService.deleteOneCat(payload);
  }

  @MessagePattern(SettingPattern.UPDATE_CAT)
  updateCat(@Payload() payload: IEditeCategory) {
    return this.catMecroService.updateCat(payload);
  }




}
