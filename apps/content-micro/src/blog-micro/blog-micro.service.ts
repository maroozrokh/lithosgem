import {  IBlog, IEditeBlog, IEditvisual, IFindAllBlog, IFindOneByCondition, IFindOneId } from '@libs/interface';
import { AdminRepository, BlogRepository, ImageRepository, str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, OK } from '@res/common/helpers';
import { BlogContentRepository } from '@libs/schema/BlogContent';
//   const newSubItem: IBlog = {};
//   const newMainItem: IAssets_type = {
//   subItems: [newSubItem], // اضافه کردن یک SubItem به MainItem
// };
@Injectable()
export class BlogMicroService {


  constructor(
    private readonly blogRepo: BlogRepository, 
    private readonly blogContentRepo: BlogContentRepository,
     private readonly imageRepo: ImageRepository, 
     private readonly adminRepo: AdminRepository) { }



  // async addIMG(payloadIMG: IAssets_type) {

  //   const image = await this.imageRepo.create({
  //     payloadIMG,
  //   });
  //   return (image);
  // }


  // async addContent(payload: IContent_type) {
  //   const content = await this.blogContentRepo.create({
  //     payload,
  //   });
  //   return (content);
  // }

  async addBlog(payload: IBlog) {
    const blog = await this.blogRepo.addBlog(payload);
    return (blog);

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

  async findAllBlog(payload: IFindAllBlog) {

    const $match = {};

    if (payload.query) {
      $match['name'] = new RegExp(payload.query, 'ig');
    }
    if (!payload.blog) {
      $match['blog'] = str2objectId(payload.blog?._id || payload?.blog);
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
    const data = await this.blogRepo.pagination(
      [{ $match }],
      payload.page,
      payload.count,
      $match,
    );


    return OK(data, true);

  }

  async findOneBlog(payload: IFindOneId) {

    const oneBlog = await this.blogRepo.findOneById(payload._id);
    if (!oneBlog) {
      return BAD_REQUEST('Opps! not found Blog');
    }
    return OK(oneBlog);

  }


  async findOneBlogByName(payload: IFindOneByCondition) {

    const oneBlog = await this.blogRepo.findByCondition(payload);
    if (!oneBlog) {
      return BAD_REQUEST('Opps! not found Blog');
    }
    return OK(oneBlog);

  }



  async deleteOneBlog(payload: IFindOneId) {
    const blog = await this.blogRepo.findOneByCondition({
      _id: str2objectId(payload._id),
    });
    if (!blog) {
      return BAD_REQUEST('Opps! not found blog');
    }
    const deletBlog = await this.blogRepo.deleteOne({
      _id: payload._id,
    });

    return OK(!!deletBlog?.deletedCount);
  }


  // async updateImage1(payload: IEditvisual) {
  //   let imagen = await this.imageRepo.findOneByCondition({
  //     _id: str2objectId(payload._id),
  //   });
  //   if (!imagen) {
  //     return BAD_REQUEST('Opps! image not found');
  //   }
  //   if ('url' in payload) {
  //     imagen.url = payload.url;

  //   }

  //   if ('alt' in payload) {
  //     imagen.alt = payload.alt;

  //   }
  //   if ('name' in payload) {
  //     imagen.name = payload.name;

  //   }
  //   if ('link' in payload) {
  //     imagen.link = payload.link;

  //   }
  //   if ('order' in payload) {
  //     imagen.order = payload.order;

  //   }
  //   if ('categories' in payload) {
  //     imagen.categories = payload.categories;

  //   }

  //   return (imagen);

  // }
  


  // async blogUpdate(payload:IEditeBlog){
  //   const blog = await this.blogRepo.findOneByCondition({
  //       _id: str2objectId(payload._id),
  //     });

  // }
  async updateBlog(payload: IEditeBlog) {
  let blog = await this.blogRepo.findOneByCondition({
    _id: str2objectId(payload._id),
  });
    if (!blog) {
      return BAD_REQUEST('Opps! blog not found');
    }
    if ('title' in payload) {
      blog.title = payload?.title;
    }

    if ('content' in payload) {
      // for (let i = 0; i < Object.values(payload.content).length; i++) {
      //   blog.content[i] = payload?.content[i];
      // }
      blog.content = payload?.content ;
     
    }

    if ('metaDescription' in payload) {
      blog.metaDescription = payload?.metaDescription;
    }

    if ('video' in payload) {
      const video = blog.video || { url: '', alt: '', name: '', link: '', order: 0, categories: [] }

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
      blog.video = video;

    }


    if ('categories' in payload) {
      // for (let i = 0; i < Object.values(payload.categories).length; i++) {
      //   blog.categories[i] = payload?.categories[i];
      // }
  
      blog.categories = payload?.categories as any;

     
    }

    // if ('categories' in payload) {
    //   blog.categories = payload?.categories;
    // }

    if ('url' in payload) {
      blog.url = payload?.url;
    }

    if ('images' in payload) {
        blog.images = payload.images;
    }

    await blog.save();
    blog = blog.toObject();
    return OK(blog);

  }


// async updateImages(payload:any){
//  const $set = {};
//  if('url' in payload){
//   $set['images.$.url']= payload.url;
//  }
//  const myImage = await this.blogRepo.updateOne({

//     _id: str2objectId(payload._id),
//     'images._id' : str2objectId(payload._imageId),
    
//   },{
//     $set,
//   });
 
//   return(myImage);


// }






}