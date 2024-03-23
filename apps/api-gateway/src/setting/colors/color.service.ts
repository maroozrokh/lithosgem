import { ICategory, IColor, IEditeCategory, IEditeColor, IFindAllCat, IFindAllColor } from '@libs/interface/setting';
import { Injectable } from '@nestjs/common';
import { SettingProxy } from '@res/common/proxy/setting';
import {  IFindOneId } from '@libs/interface';


@Injectable()
export class ColorService {
  constructor(private readonly settingProxy: SettingProxy) {}

  addColor(payload: IColor) {
    return this.settingProxy.addSetting(payload);
  }

  findAllColor(payload: IFindAllColor) {
    return this.settingProxy.findAllSetting(payload);
  }
  findOneColor(payload: IFindOneId) {
    return this.settingProxy.findOneSetting(payload);
  }
  deleteOneColor(payload: IFindOneId) {
    return this.settingProxy.deleteSetting(payload);
  }

  editeColor(payload: IEditeColor) {
    return this.settingProxy.updateSetting(payload);
  }




}
