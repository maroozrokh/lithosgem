import { ObjectId } from "@libs/schema";
import { IPagination } from "../base";
import { IAdmin } from "../admin";

  export interface IContent_type{
    order?: number;
    text: string;
    format?: string;
    type?: string;
    _id?: any;


  }
export interface IBlog {
    _id?: any;
    title: string;
    content: IContent_type[];
    metaDescription: string;
    images?:IAssets_type[];
    video?:IAssets_type;
    categories:string[];
    views?:number;
    updatedAt?:Date;
    createdAt?: Date;
    admin?: IAdmin;
    url: string;
    
  }



  export interface IAssets_type{
    _id?: any;
    url?: string;
    alt?: string;
    name?: string;
    order?: number;
    link?: string;
    urlImg?: string ;
    type?: string;
    categories?:string[];
    createdAt?:Date;
  }


  export interface IVideo_type{
    _id?: any;
    url?: string;
    alt?: string;
    name?: string;
    order?: number;
    link?: string;
    urlImg?: string ;
    type?: string;
    categories?:string[];
    createdAt?:Date;
    location?:string;
    tags?:Array<string>;
  }




  export interface IEditeBlog{
    _id?: any;
    title: string;
    content: IContent_type[];
    metaDescription: string;
    images?:IAssets_type[];
    video?:IAssets_type;
    url: string;
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
    urlImg?: string ;
    // type?: string;

  }
  export type TBlog = IBlog | string | typeof ObjectId;
  
  export interface IFindAllBlog extends IPagination {
    query?: any;
    blog?: TBlog ;
    category?: Array<string>;
  
  }
//TODO
  export interface IFindNewestBlog extends IPagination {
    query?: any;
    blog?: TBlog ;
    updatedAt?:Date;
  
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
  