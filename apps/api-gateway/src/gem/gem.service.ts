import { Payload } from '@nestjs/microservices';
import { IBoresh, IEditeGem, IFindAllGem, IFindOneByCondition, IFindOneId, IGem } from '@libs/interface';
import { Injectable } from '@nestjs/common';
import { GemProxy } from '@res/common/proxy/gem';

@Injectable()
export class GemService {
  constructor(private readonly gemProxy: GemProxy){} 
  addGem(payload: IGem) {
    return this.gemProxy.addGem(payload);
  }
  
  findAllGem(payload: IFindAllGem) {
    return this.gemProxy.findAllGem(payload);
  }
  findOneGem(payload: IFindOneId) {
    return this.gemProxy.findOne(payload);
  }
  deleteOneGem(payload: IFindOneId) {
    return this.gemProxy.deleteGem(payload);
  }

  findOneGemByName(payload: IFindOneByCondition) {
    return this.gemProxy.findOneByName(payload);
  }

  deleteBoreshGem(payload: IBoresh){
    return this.gemProxy.deleteBoreshGem(payload);


  }

  updateGem(payload: IEditeGem) {
    return this.gemProxy.updateGem(payload);
  }

  
  async editeImage(payload:any){

    return this.gemProxy.updateImage(payload);

  
  
  }

  
}
