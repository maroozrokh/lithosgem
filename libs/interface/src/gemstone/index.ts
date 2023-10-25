// import { ObjectId } from '@libs/schema';
// import { IPagination } from '../Base';

import { Ivisual } from "../blog";

export interface IGem {
    _id?: any;
    title:string;
    metaDescription:string;
    content:string;
    categories:Array<string>;
    images?:Array<Ivisual>;
    video?: Ivisual;
    sound?: Ivisual;
    padcast?:Ivisual;
    color?:string;
    ductColor?:string;
    opacity?:string;
    kelivazh?:string;
    jala?:string;
    zaribShekast?:string;
    hardness?:number;
    weigth?:number;
    system?:string;
    shops?:Array<string>;
    price?:number;
    rare?:boolean;
    boreshImg?:Array<Ivisual>;
    createdAT?:Date;
    views?:number;
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
  