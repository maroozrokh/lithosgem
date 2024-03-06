import { ObjectId } from "@libs/schema";
import { IOcontent, Ivisual } from "../blog";
import { IPagination } from "../base";


export interface IGem {
    _id?: any;
    title:string;
    metaDescription:string;
    content:IOcontent[];
    categories:Array<string>;
    images?:Array<Ivisual>;
    mapimages?: Array<Ivisual>;
    video?: Ivisual;
    sound?: Ivisual;
    padcast?:Ivisual;
    url:string;
    popularity: number;
    boresh?: IBoresh;
    table: IGemTable;
    views?:number;
    updatedAt?:Date;
    createdAt?: Date;

  }

  export interface IBoresh{
    order: number;
    boreshImg?: Ivisual[];
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
    shops?:Array<string>;
    price?:number;
    rare?:boolean;
    boreshImg?:Array<Ivisual>;
    order?: number;

  }

  export type TGem = IGem | string | typeof ObjectId;
  
  export interface IFindAllGem extends IPagination {
    query?: any;
    gem?: TGem ;
    category?: Array<string>;
    }
  

    export interface IEditeGem{

      _id?: any;
      title:string;
      metaDescription:string;
      content:IOcontent[];
      categories:Array<string>;
      images?:Array<Ivisual>;
      mapimages?: Array<Ivisual>;
      video?: Ivisual;
      sound?: Ivisual;
      padcast?:Ivisual;
      url:string;
      popularity: number;
      boresh?: IBoresh;
      table: IGemTable;


    }