// import { ObjectId } from '@libs/schema';
// import { IPagination } from '../Base';

import { Ivisual } from "../blog";

export interface IContact{
    _id?: any;
    title: string;
    content: string;
    metaDescription: string;
    socialMedia?:Array<Ivisual>
    images?:Array<Ivisual>;
    createdAt: Date;
    map?:string;
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
  