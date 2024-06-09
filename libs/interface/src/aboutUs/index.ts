// import { ObjectId } from '@libs/schema';
// import { IPagination } from '../Base';

import { ObjectId } from "@libs/schema";
import { IAdmin } from "../admin";
import { IAssets_type } from "../blog";



export interface IAboutUs{
  
  _id?: any;
  bannerImg?:IAssets_type;
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
    _id?:any
    url?: string;
    alt?: string;
    name:string;
    link?: string;
  }



  export interface IOExpertPerson{
    _id?: string;
    persondescription?: string;
    order?: number ;
    personImg?:IAssets_type;
    
  }


   
  export interface IEditAboutUs{

    _id?: any;
    bannerImg?:IAssets_type;
    title: string;
    metaDescription: string;
    content?: string;
    mapaddress?: string;
    contactinfo?: IOConteactInfo[];
    socialmedia?: IOSocialMedia[];
    person?: IOExpertPerson[];

  }

  export type TAbout = IAboutUs | string | typeof ObjectId;


  export interface IFindAbout  {
    contactUs?: TAbout ;
    query?: any;
    // _id?: any;
  
  }
  
