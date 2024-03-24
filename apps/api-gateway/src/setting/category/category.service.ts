import { ICategory, IEditeCategory, IFindAllCat } from '@libs/interface/setting';
import { Injectable } from '@nestjs/common';
import { SettingProxy } from '@res/common/proxy/setting';
import { FindOneSettingDto } from './dto/category.dto';
import { IFindOneByCondition, IFindOneId } from '@libs/interface';


@Injectable()
export class CatService {
  constructor(private readonly settingProxy: SettingProxy) {}

  addCat(payload: ICategory) {
    return this.settingProxy.addCategory(payload);
  }

  findAllCat(payload: IFindAllCat) {
    return this.settingProxy.findAllCategory(payload);
  }
  findOneCat(payload: IFindOneId) {
    return this.settingProxy.findOneCategory(payload);
  }
  deleteOneCat(payload: IFindOneId) {
    return this.settingProxy.deleteCategory(payload);
  }

  editeCat(payload: IEditeCategory) {
    return this.settingProxy.updateCategory(payload);
  }




}
