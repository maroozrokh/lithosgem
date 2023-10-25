// import { ObjectId } from '@libs/schema';
// import { IPagination } from '../Base';

export interface IUser {
  _id?: any;
  name: string;
  email: string;
  password?: string;
  phone?:number;
  createdAt: Date;
}
// export interface IFindAllUser extends IPagination {
//   query?: any;
// }
// export interface IFindOneUser {
//   _id: typeof ObjectId | string;
// }
export interface ILoginUser {
  email: string;
  password: string;
}
export interface ISignupUser extends ILoginUser {
  name: string;
}
// export type IProfileUser = IFindOneUser;
export type IUpdateProfileUser = IUser;
export interface IForgetPasswordUser {
  email: string;
}
export interface IChangePasswordUser {
  token: string;
  password: string;
}

export interface IUserUpdateProfile {
  _id: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface IVerifyUser {
  token: string;
  // email: string;
}
