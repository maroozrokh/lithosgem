import { ICategory, IColor, IFindAllMaps, IMaps } from './../../../../interface/src/setting/index';
import { Inject, Injectable } from "@nestjs/common";
import { AProxy } from "../base/proxy-service";
import { SettingPattern } from "./enum";
import { IEditeCategory, IEditeColor, IFindAllCat, IFindAllColor } from "@libs/interface/setting";
import { IFindOneId } from "@libs/interface";

 


@Injectable()
export class SettingProxy extends AProxy<SettingProxy> {

  constructor(@Inject(SettingPattern.NAME) settingProxy: SettingProxy) {
    super(settingProxy);
  }

  // findAllCategory(payload: IFindAllCat | IFindAllColor) {
  //   return this.send(SettingPattern.FIND_ALL_CAT || SettingPattern.FIND_ALL_COLOR, payload);
  // }


    isIColor1(obj: IColor) {
  return obj;
   }

   isICategory1(obj: ICategory) {
    return obj;
     }

// addCategory(payload: any) {
// if(payload === this.isIColor1){
//     return this.send(SettingPattern.ADD_COLOR, payload);

// }
// if(payload === this.isICategory1){
//   return this.send(SettingPattern.ADD_CAT, payload);

// }
// }

  findOneCategory(payload: IFindOneId) {

      return this.send(SettingPattern.FIND_ONE_CAT , payload);
  }


  addCategory(payload: ICategory) {
    return this.send(SettingPattern.ADD_CAT, payload);
  }

  findAllCategory(payload: IFindAllCat ) {
    return this.send(SettingPattern.FIND_ALL_CAT, payload);
  }

    updateCategory(payload: IEditeCategory) {
    return this.send(SettingPattern.UPDATE_CAT , payload);
  }

   deleteCategory(payload: IFindOneId) {
    return this.send(SettingPattern.DELETE_CAT , payload);
  }




  addColor(payload: IColor) {
    return this.send(SettingPattern.ADD_COLOR, payload);
  }

  findAllColor(payload: IFindAllColor ) {
    return this.send(SettingPattern.FIND_ALL_COLOR, payload);
  }

    updateColor(payload: IEditeColor) {
    return this.send(SettingPattern.UPDATE_COLOR , payload);
  }

   deleteColor(payload: IFindOneId) {
    return this.send(SettingPattern.DELETE_COLOR , payload);
  }
  findOneColor(payload: IFindOneId) {

    return this.send(SettingPattern.FIND_ONE_COLOR , payload);
}





addMaps(payload: IMaps) {
  return this.send(SettingPattern.ADD_MAPS, payload);
}

findAllMaps(payload: IFindAllMaps ) {
  return this.send(SettingPattern.FIND_ALL_MAPS, payload);
}

  updateMaps(payload: IMaps) {
  return this.send(SettingPattern.UPDATE_MAPS , payload);
}

 deleteMaps(payload: IFindOneId) {
  return this.send(SettingPattern.DELETE_MAPS , payload);
}
findOneMaps(payload: IFindOneId) {

  return this.send(SettingPattern.FIND_ONE_MAPS , payload);
}




  // findOneCategory(payload: IFindOneId) {
  //   return this.send(SettingPattern.FIND_ONE_CAT || SettingPattern.FIND_ONE_COLOR, payload);
  // }

  
  // updateCategory(payload: IEditeCategory | IEditeColor) {
  //   return this.send(SettingPattern.UPDATE_CAT || SettingPattern.UPDATE_COLOR, payload);
  // }


  // deleteCategory(payload: IFindOneId) {
  //   return this.send(SettingPattern.DELETE_CAT || SettingPattern.DELETE_COLOR, payload);
  // }

 
  
}