import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IndexMicroService } from './index-micro.service';
import { IndexPattern } from '@res/common/proxy/indexProxy';
import { IEditedIndex, IindexType } from '@libs/interface/indexInterface';
import { IFindAllBlog, IFindAllGem, IFindOneId } from '@libs/interface';

@Controller()
export class IndexMicroController {
  constructor(private readonly indexMicroService: IndexMicroService) {}



  @MessagePattern(IndexPattern.ADD_INDEX)
  addIndex(@Payload() payload: IindexType) {
    return this.indexMicroService.addIndex(payload);
  }



  @MessagePattern(IndexPattern.FIND_INDEX)
  findIndexPageById(@Payload() payload: IFindOneId) {
    return this.indexMicroService.findIndexById(payload);
  }






  @MessagePattern(IndexPattern.UPDATE_INDEX)
  updateIndexPage(@Payload() payload: IEditedIndex) {
    return this.indexMicroService.updateIndexPage(payload);
  }


  
  // @MessagePattern(IndexPattern.FAIND_LATEST_BLOG)
  // findLatestBlog(@Payload() payload: IFindAllBlog) {
  //   return this.indexMicroService.findLatestBlogIndex();
  // }


  @MessagePattern(IndexPattern.FAIND_LATEST_BLOG)
  findLatestBlog() {
    return this.indexMicroService.findLatestBlogIndex();
  }

   
  @MessagePattern(IndexPattern.FAIND_LATEST_GEM)
  findLatestGem() {
    return this.indexMicroService.findLatestGemIndex();
  }




}
