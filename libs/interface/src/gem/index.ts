import { ObjectId } from "@libs/schema";
import { IPagination } from "../base";
import { IAssets_type, IContent_type, TAdmin } from "..";


export interface IGem {
    _id?: any;
    title:string;
    metaDescription:string;
    content:IContent_type[];
    categories:Array<string>;
    images?:Array<IAssets_type>;
    mapimages?: Array<IAssets_type>;
    video?: IAssets_type;
    sound?: IAssets_type;
    padcast?:IAssets_type;
    url:string;
    popularity: number;
    boresh?: IBoresh;
    gemTable?: IGemTable;
    views?:number;
    updatedAt?:Date;
    createdAt?: Date;

  }

  export interface IBoresh{
    _id?: any;
    order?: number;
    boreshImg?: IAssets_type[];
    type?: string;
  }

  export interface IGemTable{
    _id?: any;
    color?:string[];
    ductColor?:string;
    opacity?:string;
    kelivazh?:string;
    jala?:string;
    zaribShekast?:string;
    hardness?:number;
    weigth?:number;
    system?:string;
    price?:number;
    rare?:boolean;
    order?: number;
    type?: string;
    admin?:TAdmin;

  }

  export type TGem = IGem | string | typeof ObjectId;
  export type vvv = IAssets_type | string | typeof ObjectId;
  
  export interface IFindAllGem extends IPagination {
    query?: any;
    gem?: TGem ;
    category?: Array<string>;
    }


    export interface IFindNewestGem extends IPagination {
      query?: any;
      blog?: TGem ;
      updatedAt?:Date;
    
    }
  

    export interface IEditeGem{

      _id?: any;
      title:string;
      metaDescription:string;
      content:IContent_type[];
      categories:Array<string>;
      images?:Array<IAssets_type>;
      mapimages?: Array<IAssets_type>;
      video?: IAssets_type;
      sound?: IAssets_type;
      padcast?:IAssets_type;
      url:string;
      popularity: number;
      boresh?: IBoresh;
      table: IGemTable;
      updatedAt?: Date;


    }