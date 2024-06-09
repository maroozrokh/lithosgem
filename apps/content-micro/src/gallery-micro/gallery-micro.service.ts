import { ThrottlerService } from './../../../../libs/common/src/config/app/throttler.config';
import { Payload } from '@nestjs/microservices';
import { IAssets_type, IBlog, IContent_type, IEditeGem, IEditvisual,  IFindAllBlog,  IFindAllGem, IFindOneByCondition, IFindOneId, IGem } from '@libs/interface';
import { AdminRepository, BlogRepository, GemRepository, ImageRepository, str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import { BlogContentRepository } from '@libs/schema/BlogContent';
import { IFindAllVideos } from '@libs/interface/gallery';
import { GalleryRepository } from '@libs/schema/Gallery';
import { url } from 'inspector';
//   const newSubItem: IBlog = {};
//   const newMainItem: IAssets_type = {
//   subItems: [newSubItem], // اضافه کردن یک SubItem به MainItem
// };
@Injectable()
export class GalleryMicroService {


  constructor(
    private readonly gelleryRepo: GalleryRepository, 
    private readonly gemRepo: GemRepository, 
    private readonly blogRepo: BlogRepository, 
     private readonly adminRepo: AdminRepository) { }


     async findAllVideos(payload: IFindAllVideos ) {
      return await this.gelleryRepo.findAll(payload ) ;

    }



//   async findAllVideos(payload: IFindAllVideos) {

//     const $match = {};

//     if (payload.query) {
//       $match['name'] = new RegExp(payload.query, 'ig');
//     }
//     if (!payload.video) {
//       $match['video'] = str2objectId(payload.video?._id || payload?.video);
//     }
//     //filter category
//     if ('category' in payload) {
//       if(typeof payload.category === 'string'){
//         $match['categories'] = {$in: [payload.category]}
//       }else{
//         $match['categories'] = {$in: payload.category}

//       }
      
//     }

// // return $match;
//     const data = await this.gelleryRepo.pagination(
//       [{ $match }],
//       payload.page,
//       payload.count,
//       $match,
//     );


//     return OK(data, true);

//   }

  


  


 


}








