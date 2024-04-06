
import { IAboutUs, IAdmin, IBlog, IEditAboutUs, IEditeBlog, IEditeGem, IEditvisual, IFindAllBlog, IFindAllGem, IFindOneId, IGem } from '@libs/interface';
import { AboutUsRepository, AdminRepository, BlogRepository, GemRepository, ImageRepository, str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import { BlogProxy } from '@res/common/proxy/blog';
import { BlogContentRepository } from '@libs/schema/BlogContent';
import { GemTableRepository } from '@libs/schema/GemTable';
//   const newSubItem: IBlog = {};
//   const newMainItem: Ivisual = {
//   subItems: [newSubItem], // اضافه کردن یک SubItem به MainItem
// };
@Injectable()
export class AboutUsMicroService {


  constructor(
    private readonly aboutUsRepo: AboutUsRepository,
     private readonly blogContentRepo: BlogContentRepository, private readonly imageRepo: ImageRepository, 
     private readonly adminRepo: AdminRepository) { }



   

  async addAbout(payload: IAboutUs) {
     const count = await this.aboutUsRepo.countByCondition(payload._id)
      if(count === 0){
          const aboutUs = await this.aboutUsRepo.create({...payload,isCreated:true});
         
      return (aboutUs);
      }else{
        return BAD_REQUEST('Opps!  AboutUs Page was created befor');

      }  

  }




  async findAboutUs(payload: IFindOneId) {
    const aboutUsPage = await this.aboutUsRepo.findOneById(payload._id);
    if (!aboutUsPage) {
      return BAD_REQUEST('Opps! not found AboutUs Page');
    }
    return OK(aboutUsPage);

  }



  async updateAboutUsPage(payload: IEditAboutUs) {
  let aboutUs = await this.aboutUsRepo.findOneByCondition({
    _id: str2objectId(payload._id),
  });
    if (!aboutUs) {
      return BAD_REQUEST('Opps! aboutUs not found');
    }
    if ('title' in payload) {
      aboutUs.title = payload?.title;
    }

 
    if ('metaDescription' in payload) {
      aboutUs.metaDescription = payload?.metaDescription;
    }

    if ('bannerImg' in payload) {
      const bannerImg = aboutUs.bannerImg || { url: '', alt: '', name: '', link: '' }

      if (payload.bannerImg.alt) {
        bannerImg.alt = payload?.bannerImg.alt;

      }
      if (payload.bannerImg.name) {
        bannerImg.name = payload?.bannerImg.name;

      }
      if (payload.bannerImg.link) {
        bannerImg.link = payload?.bannerImg.link;
      }
      aboutUs.bannerImg = bannerImg;

    }

    if ('mapaddress' in payload) {
      aboutUs.mapaddress = payload?.mapaddress;
    }
    if('contactinfo' in payload){
    aboutUs.contactinfo = payload.contactinfo;
      

    }
    if('socialmedia' in payload){
      aboutUs.socialmedia = payload.socialmedia;
    }

    if('person' in payload){
      aboutUs.person = payload.person;
    }

    

    await aboutUs.save();
    aboutUs = aboutUs.toObject();
    return OK(aboutUs);

  
}


}








