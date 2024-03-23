import { Controller } from '@nestjs/common';
import {  ColorMicroService } from './color-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SettingPattern } from '@res/common';
import {  IColor,  IEditeColor } from '@libs/interface/setting';
import {  IFindOneId } from '@libs/interface';

@Controller()
export class ColorMicroController {
  constructor(private readonly colorMecroService: ColorMicroService) {}



  @MessagePattern(SettingPattern.ADD_COLOR)
  addColor(@Payload() payload: IColor) {
    return this.colorMecroService.addColor(payload);
  }


  @MessagePattern(SettingPattern.FIND_ALL_COLOR)
  findAllColor(@Payload() payload: any) {
    return this.colorMecroService.findAllColor(payload);
  }

  @MessagePattern(SettingPattern.FIND_ONE_COLOR)
  findOneColor(@Payload() payload: IFindOneId) {
    return this.colorMecroService.findOneColor(payload);
  }

  @MessagePattern(SettingPattern.DELETE_COLOR)
  deleteOneColor(@Payload() payload: IFindOneId) {
    return this.colorMecroService.deleteOneColor(payload);
  }

  @MessagePattern(SettingPattern.UPDATE_COLOR)
  updateColor(@Payload() payload: IEditeColor) {
    return this.colorMecroService.updateColor(payload);
  }




}
