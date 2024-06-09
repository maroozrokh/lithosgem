import { ObjectId } from "@libs/schema";
import { IPagination } from "../base";

export interface IFaq{
    title: string;
    // content?: string;
    metaDescription: string;
    qa?:Array<IQA>
    from?:string;
    sendFromDate?:Date;
    _id?: any;
  }

  export interface IQA{
    _id?:any;
    question?:string;
    answer?:string;
  }


  export interface IEditeFaq{
    title: string;
    // content?: string;
    metaDescription: string;
    qa?:Array<IQA>
    // from?:string;
    // sendFromDate?:Date;
    _id?: any;
  }


  export type TQA = IQA | string | typeof ObjectId;
  
  export interface IFindAllQa extends IPagination {
    query?: any;
    qa?: TQA ;
  
  }


  
  export type TFQA = IFaq | string | typeof ObjectId;
  
  export interface IFindFAQ extends IPagination {
    query?: any;
    faq?: TFQA ;
  
  }

  
  