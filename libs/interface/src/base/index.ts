import { ObjectId } from "@libs/schema";

export interface IPagination {
  page?: number;
  count?: number;
}

export interface IFindOneId {
  _id: typeof ObjectId | string;
}



export interface IFindOneByCondition{
  condition:string;
}
