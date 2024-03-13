import { IOcontent, Ivisual } from '../../../../libs/interface/src/blog/index';
import { Payload } from '@nestjs/microservices';
import { url } from 'inspector';
import { AddBlogDto } from '../../../api-gateway/src/blog/dto/add_blog.dto';
import { Type } from 'class-transformer';
import { IAdmin, IBlog, IEditeBlog, IEditeGem, IEditvisual, IFindAllBlog, IFindAllGem, IFindOneId, IGem } from '@libs/interface';
import { AdminRepository, BlogRepository, GemRepository, ImageRepository, str2objectId } from '@libs/schema';
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
export class GemMicroService {


  constructor(
    private readonly gemRepo: GemRepository,
     private readonly blogContentRepo: BlogContentRepository, private readonly imageRepo: ImageRepository, 
     private readonly adminRepo: AdminRepository) { }



  async addIMG(payloadIMG: Ivisual) {

    const image = await this.imageRepo.create({
      payloadIMG,
    });
    return (image);
  }


  async addContent(payload: IOcontent) {
    const content = await this.blogContentRepo.create({
      payload,
    });
    return (content);
  }

  async addGem(payload: IGem) {
    const gem = await this.gemRepo.addGem(payload);
    // console.log(payload);
    return (gem);

  }


  //   async lastBlog(payload: IBlog) {
  //   // const admin = await this.adminRepo.findOneById(payload.admin._id);
  //   // if (!admin) {
  //   //   return BAD_REQUEST('Opps! not found admin');
  //   // }
  //   let img = [];
  //   for (let i = 0; i < payload.images.length; i++) {
  //     img[i] = await this.addIMG(payload.images[i]);

  //   }


  //   let blogContent = [];

  //   for (let i = 0; i < payload.blogCcontent.length; i++) {
  //     blogContent[i] = await this.addContent(payload.blogCcontent[i]);

  //   }



  //   const blog = await this.blogRepo.create({
  //     ...payload, images: img,
  //     blogContent: blogContent,
    
  //   });


  //   if (!blog) {
  //     return BAD_REQUEST('Opps! not create blog');
  //   }

  //   return OK(blog);

  // }

  async findAllGem(payload: IFindAllGem) {

    const $match = {};

    if (payload.query) {
      $match['name'] = new RegExp(payload.query, 'ig');
    }
    if (!payload.gem) {
      $match['gem'] = str2objectId(payload.gem?._id || payload?.gem);
    }
    //filter category
    if ('category' in payload) {
      if(typeof payload.category === 'string'){
        $match['categories'] = {$in: [payload.category]}
      }else{
        $match['categories'] = {$in: payload.category}

      }
      
    }

// return $match;
    const data = await this.gemRepo.pagination(
      [{ $match }],
      payload.page,
      payload.count,
      $match,
    );


    return OK(data, true);

  }

  async findOneGem(payload: IFindOneId) {

    const oneGem = await this.gemRepo.findOneById(payload._id);
    if (!oneGem) {
      return BAD_REQUEST('Opps! not found GEM');
    }
    return OK(oneGem);

  }

  async deleteOneGem(payload: IFindOneId) {
    const gem = await this.gemRepo.findOneByCondition({
      _id: str2objectId(payload._id),
    });
    if (!gem) {
      return BAD_REQUEST('Opps! not found gem');
    }
    const deleteGem = await this.gemRepo.deleteOne({
      _id: payload._id,
    });

    return OK(!!deleteGem?.deletedCount);
  }


  async updateImage1(payload: IEditvisual) {
    let imagen = await this.imageRepo.findOneByCondition({
      _id: str2objectId(payload._id),
    });
    if (!imagen) {
      return BAD_REQUEST('Opps! image not found');
    }
    if ('url' in payload) {
      imagen.url = payload.url;

    }

    if ('alt' in payload) {
      imagen.alt = payload.alt;

    }
    if ('name' in payload) {
      imagen.name = payload.name;

    }
    if ('link' in payload) {
      imagen.link = payload.link;

    }
    if ('order' in payload) {
      imagen.order = payload.order;

    }
    if ('categories' in payload) {
      imagen.categories = payload.categories;

    }

    return (imagen);

  }
  


  // async blogUpdate(payload:IEditeBlog){
  //   const blog = await this.blogRepo.findOneByCondition({
  //       _id: str2objectId(payload._id),
  //     });

  // }
  async updateGem(payload: IEditeGem, payloadI?: IEditvisual) {
  let gem = await this.gemRepo.findOneByCondition({
    _id: str2objectId(payload._id),
  });
    if (!gem) {
      return BAD_REQUEST('Opps! gem not found');
    }
    if ('title' in payload) {
      gem.title = payload?.title;
    }

    if ('content' in payload) {
      for (let i = 0; i < Object.values(payload.content).length; i++) {
        gem.content[i] = payload?.content[i];
      }
  
     
    }

    if ('metaDescription' in payload) {
      gem.metaDescription = payload?.metaDescription;
    }

    if ('video' in payload) {
      const video = gem.video || { url: '', alt: '', name: '', link: '', order: 0, categories: [] }

      if (payload.video.alt) {
        video.alt = payload?.video.alt;

      }
      if (payload.video.name) {
        video.name = payload?.video.name;

      }
      if (payload.video.link) {
        video.link = payload?.video.link;

      }
      if (payload.video.categories) {
        video.categories = payload?.video.categories;

      }

      if (payload.video.order) {
        video.order = payload?.video.order;

      }
      gem.video = video;

    }

    if ('categories' in payload) {
      gem.categories = payload?.categories;
    }

    if ('url' in payload) {
      gem.url = payload?.url;
    }

    if ('images' in payload) {
      // for (let index = 0; index < array.length; index++) {
      //   const element = array[index];
        
      // }
        gem.images = payload.images;
    }

    if ('mapimages' in payload) {
        gem.mapimages = payload.mapimages;
    }


    if ('sound' in payload) {
      const sound = gem.sound || { url: '', alt: '', name: '', link: '', order: 0, categories: [] }

      if (payload.sound.alt) {
        sound.alt = payload?.sound.alt;

      }
      if (payload.sound.name) {
        sound.name = payload?.sound.name;

      }
      if (payload.sound.link) {
        sound.link = payload?.sound.link;

      }
      if (payload.sound.categories) {
        sound.categories = payload?.sound.categories;

      }

      if (payload.sound.order) {
        sound.order = payload?.sound.order;

      }
      gem.sound = sound;


      if ('padcast' in payload) {
        const padcast = gem.padcast || { url: '', alt: '', name: '', link: '', order: 0, categories: [] }
  
        if (payload.padcast.alt) {
          padcast.alt = payload?.padcast.alt;
  
        }
        if (payload.padcast.name) {
          padcast.name = payload?.padcast.name;
  
        }
        if (payload.padcast.link) {
          padcast.link = payload?.padcast.link;
  
        }
        if (payload.padcast.categories) {
          padcast.categories = payload?.padcast.categories;
  
        }
  
        if (payload.padcast.order) {
          padcast.order = payload?.padcast.order;
  
        }
        gem.padcast = padcast;
      }
        if('table' in payload){
          const table = gem.table || { color: [], ductColor: '', opacity: '', kelivazh: '', jala: '' , zaribShekast: '', hardness:0 ,weigth:2.2 ,system:'', price:0,rare:true,boreshImg:{url:'',alt:'',name:'',link:'',order:0,categories:''} , order:1}

          if(payload.table.color){
            table.color = payload?.table.color;

          }
          if(payload.table.ductColor){
            table.ductColor = payload?.table.ductColor;

          }
          if(payload.table.opacity){
            table.opacity = payload?.table.opacity;

          }
          if(payload.table.kelivazh){
            table.kelivazh = payload?.table.kelivazh;

          }
          if(payload.table.jala){
            table.jala = payload?.table.jala;

          }
          if(payload.table.zaribShekast){
            table.zaribShekast = payload?.table.zaribShekast;

          }
          if(payload.table.hardness){
            table.hardness = payload?.table.hardness;

          }
          if(payload.table.weigth){
            table.weigth = payload?.table.weigth;

          }
          if(payload.table.system){
            table.system = payload?.table.system;

          }
          if(payload.table.price){
            table.price = payload?.table.price;

          }
          if(payload.table.order){
            table.order = payload?.table.order;

          }
   

          if(payload.table.order){
            table.order = payload?.table.order;
          }

          gem.table = table;
        }

        if('popularity' in payload){
          
          gem.popularity = payload?.popularity;
        }
        if('boresh' in payload){
          const boresh = gem.boresh || { order: 0, boreshImg:{}}
       
          boresh.order = payload?.boresh.order;
          boresh.boreshImg = payload?.boresh.boreshImg;

        }
          gem.boresh = payload?.boresh;

    }

    await gem.save();
    gem = gem.toObject();
    return OK(gem);

  
}


async updateImages(payload:any){
 const $set = {};
 if('url' in payload){
  $set['images.$.url']= payload.url;
 }
 const myImage = await this.gemRepo.updateOne({

    _id: str2objectId(payload._id),
    'images._id' : str2objectId(payload._imageId),
    
  },{
    $set,
  });
 
  return(myImage);


}
}








