import { AddBlogDto } from './../../blog/dto/add_blog.dto';
import { ICategory, IColor, IEditeCategory, IEditeColor, IFindAllCat, IFindAllColor, IFindAllMaps, IMaps } from '@libs/interface/setting';
import { Injectable } from '@nestjs/common';
import { SettingProxy } from '@res/common/proxy/setting';
import {  IFindOneId } from '@libs/interface';


@Injectable()
export class MapsService {
  constructor(private readonly settingProxy: SettingProxy) {}

  addMaps(payload: IMaps) {
    return this.settingProxy.addMaps(payload);
  }

  findAllMaps(payload: IFindAllMaps) {
    return this.settingProxy.findAllMaps(payload);
  }
  findOneMaps(payload: IFindOneId) {
    return this.settingProxy.findOneMaps(payload);
  }
  deleteOneMaps(payload: IFindOneId) {
    return this.settingProxy.deleteMaps(payload);
  }

  editeMaps(payload: IMaps) {
    return this.settingProxy.updateMaps(payload);
  }




}
