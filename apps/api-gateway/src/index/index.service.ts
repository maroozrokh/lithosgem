import { Payload } from '@nestjs/microservices';
import { BlogRepository } from './../../../../libs/schema/src/Blogs/repository';

import {  IEditeBlog, IFindAllBlog, IFindAllGem, IFindOneByCondition, IFindOneId } from '@libs/interface';
import { IEditedIndex, IindexType } from '@libs/interface/indexInterface';
import { Injectable } from '@nestjs/common';
import { IndexProxy } from '@res/common/proxy/indexProxy';

@Injectable()
export class IndexService {
  constructor(private readonly indexProxy: IndexProxy) {}
  addIndex(payload: IindexType) {
    return this.indexProxy.addBIndex(payload);
  }

  findIndex(payload: IFindOneId) {
    return this.indexProxy.findIndex(payload);
  }

  updateIndex(payload: IEditedIndex) {
    return this.indexProxy.updateIndex(payload);
  }


   getLatestPosts(){
    return this.indexProxy.findLatestBlog();
  }


  getLatestGems(){
    return this.indexProxy.findLatestGems();
  }


}
