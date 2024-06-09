import { Inject, Injectable } from '@nestjs/common';
 import { AProxy } from '../base/proxy-service';
import { AboutUsPattern } from './enum';
import { IAboutUs,  IEditAboutUs, IFindAbout, IFindOneId,  } from '@libs/interface';
 
 

@Injectable()
export class AboutUsProxy extends AProxy<AboutUsProxy> {

  constructor(@Inject(AboutUsPattern.NAME) aboutUsProxy: AboutUsProxy) {
    super(aboutUsProxy);
  }

  findAbout(payload: IFindOneId) {
    return this.send(AboutUsPattern.FIND_ABOUT_ID, payload);
  }

  
  findAboutPage(payload: IFindAbout) {
    return this.send(AboutUsPattern.FIND_ABOUT, payload);
  }




  updateAbout(payload: IEditAboutUs) {
    return this.send(AboutUsPattern.UPDATE_ABOUT, payload);
  }


  deleteAbout(payload: IFindOneId) {
    return this.send(AboutUsPattern.DELETE_ABOUT, payload);
  }

  addAbout(payload: IAboutUs) {
    return this.send(AboutUsPattern.ADD_ABOUT, payload);
  }


 
}
