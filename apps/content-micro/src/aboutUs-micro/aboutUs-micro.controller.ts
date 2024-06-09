import { Controller, Get } from '@nestjs/common';
import {  AboutUsMicroService } from './aboutUs-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlogPattern } from '@res/common/proxy/blog';
import { IAboutUs, IBlog,  IEditAboutUs,  IEditeBlog,  IEditeGem,  IFindAllBlog, IFindAllGem, IFindOneId, IGem, IAssets_type, IFindAbout } from '@libs/interface';
import { GemPattern } from '@res/common/proxy/gem';
import { AboutUsPattern } from '@res/common/proxy/aboutUs';

@Controller()
export class AboutUsMicroController {
  constructor(private readonly aboutUsMicroService: AboutUsMicroService) {}



  @MessagePattern(AboutUsPattern.ADD_ABOUT)
  addAboutUs(@Payload() payload: IAboutUs) {
    return this.aboutUsMicroService.addAbout(payload);
  }



  @MessagePattern(AboutUsPattern.FIND_ABOUT_ID)
  findAboutUsPageById(@Payload() payload: IFindOneId) {
    return this.aboutUsMicroService.findAboutUsById(payload);
  }




  
  // @MessagePattern(AboutUsPattern.FIND_ABOUT)
  // findAboutUsPage(@Payload() payload: IFindAbout) {
  //   console.log(payload);
  //   return this.aboutUsMicroService.findAboutUs(payload);
  // }





  @MessagePattern(AboutUsPattern.UPDATE_ABOUT)
  updateAboutUs(@Payload() payload: IEditAboutUs) {
    return this.aboutUsMicroService.updateAboutUsPage(payload);
  }




}
