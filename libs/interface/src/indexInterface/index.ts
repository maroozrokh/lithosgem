import { ObjectId } from "@libs/schema";
import { IPagination } from "../base";
import { IAdmin } from "../admin";
import { IAssets_type } from "../blog";




export interface IindexImageObject {
  image?: IAssets_type;
  text?: string;
}

export interface IindexType{
  _id?: any;
  title?:string;
  metaDescription?: string;
  slider?: IAssets_type[];
  whyUs?: IindexImageObject[];
  indexExpert?:IindexImageObject;
  indexBoresh?: IindexImageObject[];
  updatedAt?:Date;
  createdAt?: Date;
  admin?: IAdmin;
}





  export interface IEditedIndex{
    title?: string;
    metaDescription?: string;
    _id?: any;
    slider?: IAssets_type[];
    whyUs?: IindexImageObject[];
    indexExpert?:IindexImageObject;
    indexBoresh?: IindexImageObject[];
    updatedAt?:Date;
 }




  // export type TIndex = IindexType | string | typeof ObjectId;
  



