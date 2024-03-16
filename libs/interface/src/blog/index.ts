// import { ObjectId } from '@libs/schema';
// import { IPagination } from '../Base';

import { ImageSchima, ObjectId } from "@libs/schema";
import { IPagination } from "../base";
import { IAdmin } from "../admin";

  export interface IOcontent{
    order: number;
    text: string;
    // format?:string;
    // type?:string;


  }
export interface IBlog {
    _id?: any;
    title: string;
    blogCcontent: IOcontent[];
    metaDescription: string;
    images?:Ivisual[];
    video?:Ivisual;
    categories:string[];
    views?:number;
    updatedAt?:Date;
    createdAt?: Date;
    admin?: IAdmin;
    URL: string;
    

  }



  export interface Ivisual{
    _id?:any;
    url: string;
    alt:string;
    name?: string;
    link?: string;
    order?:number;
    categories?:string[];
    // type?:string;
  }



  export interface IEditeBlog{
    _id?: any;
    title: string;
    blogContent: IOcontent[];
    metaDescription: string;
    images?:Ivisual[];
    video?:Ivisual;
    categories:string[];
    URL: string;
    // updatedAt?:Date;
  }



  
  export interface IEditvisual{

    _id?:any;
    url: string;
    alt:string;
    name?: string;
    link?: string;
    order:number;
    categories:string[];


  }
  export type TBlog = IBlog | string | typeof ObjectId;
  
  export interface IFindAllBlog extends IPagination {
    query?: any;
    blog?: TBlog ;
    category?: Array<string>;
  
  }


  // export interface IFindAllUser extends IPagination {
  //   query?: any;
  // }
  // export interface IFindOneUser {
  //   _id: typeof ObjectId | string;
  // }
//   export interface ILoginUser {
//     email: string;
//     password: string;
//   }
//   export interface ISignupUser extends ILoginUser {
//     name: string;
//   }
//   // export type IProfileUser = IFindOneUser;
//   export type IUpdateProfileUser = IUser;
//   export interface IForgetPasswordUser {
//     email: string;
//   }
//   export interface IChangePasswordUser {
//     token: string;
//     password: string;
//   }
  
//   export interface IUserUpdateProfile {
//     _id: string;
//     name?: string;
//     email?: string;
//     password?: string;
//   }
  
//   export interface IVerifyUser {
//     token: string;
//     // email: string;
//   }
  