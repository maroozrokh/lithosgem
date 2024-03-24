import { ICategory, IColor, IEditeCategory, IEditeColor, IFindAllCat, IFindAllColor } from '@libs/interface/setting';
import { Injectable } from '@nestjs/common';
import { SettingProxy } from '@res/common/proxy/setting';
import {  IFindOneId } from '@libs/interface';


@Injectable()
export class ColorService {
  constructor(private readonly settingProxy: SettingProxy) {}

  addColor(payload: IColor) {
    return this.settingProxy.addColor(payload);
  }

  findAllColor(payload: IFindAllColor) {
    return this.settingProxy.findAllColor(payload);
  }
  findOneColor(payload: IFindOneId) {
    return this.settingProxy.findOneColor(payload);
  }
  deleteOneColor(payload: IFindOneId) {
    return this.settingProxy.deleteColor(payload);
  }

  editeColor(payload: IEditeColor) {
    return this.settingProxy.updateColor(payload);
  }




}
