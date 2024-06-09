import { Inject, Injectable } from '@nestjs/common';
 import { AProxy } from '../base/proxy-service';
import { IndexPattern } from './enum';
import { IBlog, IEditeBlog,IFindAllBlog, IFindAllGem, IFindOneByCondition, IFindOneId } from '@libs/interface';
import { IEditedIndex, IindexImageObject, IindexType } from '@libs/interface/indexInterface';
 
 

@Injectable()
export class IndexProxy extends AProxy<IndexProxy> {

  constructor(@Inject(IndexPattern.NAME) indexProxy: IndexProxy) {
    super(indexProxy);
  }

  findIndex(payload: IFindOneId) {
    return this.send(IndexPattern.FIND_INDEX, payload);
  }


  updateIndex(payload: IEditedIndex) {
    return this.send(IndexPattern.UPDATE_INDEX, payload);
  }


  addBIndex(payload: IindexType) {
    return this.send(IndexPattern.ADD_INDEX, payload);
  }

  findLatestBlog(){
    return this.send(IndexPattern.FAIND_LATEST_BLOG);

  }


  findLatestGems(){
    return this.send(IndexPattern.FAIND_LATEST_GEM);

  }

 
}
