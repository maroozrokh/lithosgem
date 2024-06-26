import { Payload } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
 import { AProxy } from '../base/proxy-service';
import { GemPattern } from './enum';
import { IBoresh, IEditeGem,   IFindAllGem, IFindOneByCondition, IFindOneId, IGem } from '@libs/interface';
 
 

@Injectable()
export class GemProxy extends AProxy<GemProxy> {
  // findOneById(_id: any) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(@Inject(GemPattern.NAME) gemProxy: GemProxy) {
    super(gemProxy);
  }
  findAllGem(payload: IFindAllGem) {
    return this.send(GemPattern.FIND_ALL_GEM, payload);
  }
  findOne(payload: IFindOneId) {
    return this.send(GemPattern.FIND_ONE_GEM, payload);
  }


  updateGem(payload: IEditeGem) {
    return this.send(GemPattern.UPDATE_GEM, payload);
  }


  deleteGem(payload: IFindOneId) {
    return this.send(GemPattern.DELETE_GEM, payload);
  }

  addGem(payload: IGem) {
    return this.send(GemPattern.ADD_GEM, payload);
  }

  findOneByName(payload: IFindOneByCondition) {
    return this.send(GemPattern.FIND_ONE_GEM_BY_NAME, payload);
  }
  deleteBoreshGem(payload: IBoresh){
    return this.send(GemPattern.DELETE_BORESH, payload);

  }


  updateImage(payload: any) {
    return this.send(GemPattern.UPDATE_IMAGE, payload);
  }

  

  
}
