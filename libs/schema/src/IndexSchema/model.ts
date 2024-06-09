import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBlog,  } from '@libs/interface/blog';
import { IAdmin, IAssets_type, IContent_type } from '@libs/interface';
import { Admin } from '../Admin/model';
import { IindexImageObject, IindexType } from '@libs/interface/indexInterface';
export type IndexDocument = Index & Document;
export const INDEX = 'Index';


@Schema({ _id: true })
export class Iimage implements IAssets_type {
    @Prop({ required: true  })
    url: string;
    @Prop({ required: true })
    alt?: string;
    @Prop({ required: true  })
    name?: string;
    @Prop({ required: true  })
    link?: string;
    @Prop({ required: true })
    order?:number;
    @Prop({ required: true})
    categories?:string[];
    @Prop({ required: true})
    urlImg?: string ;
    @Prop({ required: false})
    type?: string;
    

}

export class IndexImageObject implements IindexImageObject{
 
    @Prop({ required: true, default: 'gem stone text content' })
    text?: string;
    @Prop({ required: false, default: [], _id : true, type: Array<Iimage> })
    image?: Iimage;

}

@Schema({
    timestamps: false,
    versionKey: false,
})
export class Index extends BaseModel implements IindexType {
    @Prop({ required: true, default: 'gem stone ' })
    title?:string;
    @Prop({ required: true, default: 'gem stone ' })
    metaDescription?:string;
    @Prop({ required: false, default: [], _id : true, type: Array<Iimage> })
    slider?: Iimage[];
    @Prop({ required: true, default: [], type: Array<IndexImageObject>})
    whyUs?: IndexImageObject[];
    @Prop({ required: true,default:false, type: IndexImageObject})
    indexExpert?:IndexImageObject;
    @Prop({ required: true, default: [], type: Array<IndexImageObject>})
    indexBoresh?: IndexImageObject[];
    // admin?: IAdmin;
}

export const IndexSchema = SchemaFactory.createForClass(Index);
export const IndexFeature = {
    name: Index.name,
    schema: IndexSchema,
};
