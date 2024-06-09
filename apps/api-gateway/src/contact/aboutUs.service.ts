import { IFindAbout } from './../../../../libs/interface/src/aboutUs/index';

import { IAboutUs, IBlog,  IEditAboutUs,  IEditeBlog, IFindAllBlog, IFindOneId } from '@libs/interface';
import { Injectable } from '@nestjs/common';
import { AboutUsProxy } from '@res/common/proxy/aboutUs';
import { BlogProxy } from '@res/common/proxy/blog';
import { ok } from 'assert';

@Injectable()
export class AboutUsService {
  constructor(private readonly aboutUsProxy: AboutUsProxy) {}

  addAboutUs(payload: IAboutUs) {
    return this.aboutUsProxy.addAbout(payload);
  }



  // findAboutUsPage(payload: IFindOneId){
  //   return this.aboutUsProxy.findAbout(payload);

  // }

  deleteAboutUsPage(payload: IFindOneId) {
    return this.aboutUsProxy.deleteAbout(payload);
  }

  updateAboutUsPage(payload: IEditAboutUs) {
    return this.aboutUsProxy.updateAbout(payload);
  }


  
  findAboutUSById(payload: IFindOneId){
    return this.aboutUsProxy.findAbout(payload);

  }


  // findAboutUsPages(payload: IFindAbout){
  //   return this.aboutUsProxy.findAboutPage(payload);

  // }

  // findAboutUsPages(payload: IFindAbout){
  //   return this.aboutUsProxy.findAboutPage(payload);

  // }
 

}
