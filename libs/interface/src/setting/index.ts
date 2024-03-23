import { ObjectId } from "@libs/schema";
import { IAdmin } from "../admin";
import { IPagination } from "../base";

export interface ICategory{
    _id?:any;
   name:string;
   typeCat:string[];
   updatedAt?:Date;
   createdAt?: Date;
   admin?: IAdmin;


}

export interface IEditeCategory{
    _id?:any;
    name:string;
    typeCat:string[];
 
 }

export type TCat = ICategory | string | typeof ObjectId;

export interface IFindAllCat extends IPagination{
    query?: any;
    cat?: TCat ;
}

export interface IColor{
    _id?:any;
    colorName:string;
    colorCode: string;
    updatedAt?:Date;
    createdAt?: Date;
    admin?: IAdmin;
}

export interface IEditeColor{
    _id?:any;
    colorName:string;
    colorCode: string;
 
 }

export type TColor = IColor | string | typeof ObjectId;

export interface IFindAllColor extends IPagination{
    query?: any;
    color?: TColor ;
}
