import { ObjectId } from '@libs/schema/Base/helper';
import { Role } from '../Role';

export interface IAdmin {
  _id?: any;
  name?: string;
  email?: string;
  phone?: number;
  password?: string;
  role: Role;
  profile: IAdminProfile;
  access: IAdminAccess;
  createdAt: Date;
}
export type TAdmin = IAdmin | string | typeof ObjectId;
export interface IAddAccountAdmin {
  name: string;
  email?: string;
  password?: string;
  role: Role;
  profile: IAdminProfile;
  access: IAdminAccess;
}
export interface IAdminUpdateProfile {
  _id: string;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
  profile?: IAdminProfile;
  access?: IAdminAccess;
}
export interface ILoginAdmin {
  email: string;
  password: string;
}
export interface IFindAllAdmin {
  page?: number;
  count?: number;
  query?: any;
}
export interface IFindOneAdmin {
  _id: typeof ObjectId | string;
}

export interface IAdminProfile {
  image?: string;
  description?: string;
  [key: string]: any;
}
export interface IAdminAccess {
  userRemove?: boolean;
  userAdd?: boolean;
  editeBlog?: boolean;
  addBlog?:boolean;
  deleteBlog?:boolean;
  [key: string]: any;
}

export interface IForgetPasswordAdmin {
  email?: string;
  phone?: number;
}
export interface IChangePasswordAdmin {
  token: string;
  password: string;
}
