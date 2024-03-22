import { Inject, Injectable } from "@nestjs/common";
import { AProxy } from "../base/proxy-service";
import { SettingPattern } from "./enum";
import { ICategory, IColor, IEditeCategory, IEditeColor, IFindAllCat, IFindAllColor } from "@libs/interface/setting";
import { IFindAllBlog, IFindOneByCondition, IFindOneId } from "@libs/interface";

 
 

@Injectable()
export class SettingProxy extends AProxy<SettingProxy> {

  constructor(@Inject(SettingPattern.NAME) settingProxy: SettingProxy) {
    super(settingProxy);
  }
  
  findAllSetting(payload: IFindAllCat | IFindAllColor) {
    return this.send(SettingPattern.FIND_ALL_CAT || SettingPattern.FIND_ALL_COLOR, payload);
  }

    
  addSetting(payload: ICategory | IColor) {
    return this.send(SettingPattern.ADD_CAT || SettingPattern.ADD_COLOR, payload);
  }


  findOneSetting(payload: IFindOneId) {
    return this.send(SettingPattern.FIND_ONE_CAT || SettingPattern.FIND_ONE_COLOR, payload);
  }

  
  updateSetting(payload: IEditeCategory | IEditeColor) {
    return this.send(SettingPattern.UPDATE_CAT || SettingPattern.UPDATE_COLOR, payload);
  }


  deleteSetting(payload: IFindOneId) {
    return this.send(SettingPattern.DELETE_CAT || SettingPattern.DELETE_COLOR, payload);
  }

  
}