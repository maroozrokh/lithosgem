// import { ObjectId } from '@libs/schema';
// import { IPagination } from '../Base';

import { VisualDto } from "apps/api-gateway/src/blog/dto/add_blog.dto";
import { IAdmin } from "../admin";
import { Ivisual } from "../blog";

export interface IAboutUs{
  
  _id?: any;
  bannerImg?:Ivisual;
  title: string;
  metaDescription: string;
  content?: string;
  mapaddress?: string;
  contactinfo?: IOConteactInfo[];
  socialmedia?: IOSocialMedia[];
  person?: IOExpertPerson[];
  amdin?:IAdmin;
  updatedAt?:Date;
  createdAt?: Date;

  }


  export interface IOConteactInfo{
    addresstext?: string;
    emailtext?: string;
    phonetext?: string;

  }

  export interface IOSocialMedia{
    url?: string;
    alt?: string;
    link?: string;
  }

  // export interface IOperson{
  //   _id?: string;
  //   url?: string;
  //   alt?: string;
  //   name?: string;
  //   link?: string;
  //   text?: string;
  //   order?: number | null;
    
  // }


  export interface IOExpertPerson{
    _id?: string;
    description?: string;
    order?: number ;
    personImg?:Ivisual;
    
  }



  // export interface IContactUs{

  // title?: string;
  // metaDescription?: string;
  // content?: string;
  // mapaddress?: string;
  // contactinfo?: IOConteactInfo[];
  // socialmedia?: Ivisual[];
  // person?: IOExpertPerson[];
  // amdin?:IAdmin;
  // updatedAt?:Date;
  // createdAt?: Date;
  
  // }


   
  export interface IEditAboutUs{

    _id?: any;
    bannerImg?:Ivisual;
    title: string;
    metaDescription: string;
    content?: string;
    mapaddress?: string;
    contactinfo?: IOConteactInfo[];
    socialmedia?: IOSocialMedia[];
    person?: IOExpertPerson[];

  }


  
  
