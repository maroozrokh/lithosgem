import { ObjectId } from '@libs/schema/Base/helper';
import { Role } from '../Role';
import { IAssets_type } from '../blog';

export interface IAdmin {
  _id?: any;
  name?: string;
  email?: string;
  phone?: number;
  password?: string;
  role: Role;
  profile?: IAssets_type;
  // access: IAdminAccess;
  createdAt?: Date;
}
export type TAdmin = IAdmin | string | typeof ObjectId;
export interface IAddAdmin {
  name: string;
  email?: string;
  password?: string;
  role: Role;
  profile?: IAssets_type;
  // access: IAdminAccess;
}
export interface IUpdateAdmin {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
  profile?: IAssets_type;
  // access?: IAdminAccess;
}


export interface IUpdateAdminProfile {
  _id?: string;
  name?: string;
  profile?: IAssets_type;
  // access?: IAdminAccess;
}

export interface ILoginAdmin {
  email: string;
  password: string;
}
export interface IFindAllAdmin {
  page?: number;
  count?: number;
  admin?: TAdmin;
  query?: any;
}
export interface IFindOneAdmin {
  _id: typeof ObjectId | string;
}

export interface IAdminProfile {
  image?: IAssets_type;
  // description?: string;
  // [key: string]: any;
}
// export interface IAdminAccess {
//   userRemove?: boolean;
//   userAdd?: boolean;
//   editeBG?: boolean;
//   addBG?:boolean;
//   deleteBlog?:boolean;
//   addContent?:boolean;
//   editeddContent?:boolean;
//   allAccess?:boolean;
//   [key: string]: any;
// }


// export interface IAdminAccess{
//   superAdmin
// }
export interface IForgetPasswordAdmin {
  email?: string;
  phone?: number;
}
export interface IChangePasswordAdmin {
  token: string;
  password: string;
}
