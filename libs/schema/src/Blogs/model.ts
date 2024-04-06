import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBlog,  } from '@libs/interface/blog';
import { IAdmin, IAssets_type, IContent_type } from '@libs/interface';
import { Admin } from '../Admin/model';
export type BlogDocument = Blog & Document;
export const BLOG = 'Blog';


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

export class IOcontents implements IContent_type{
    @Prop({ required: false, default: 1})
    order?: number;
    @Prop({ required: true, default: 'gem stone text content' })
    text: string;
    @Prop({ required: false, default: 'gem stone text content' })
    format?: string;
    @Prop({ required: false, default: 'gem stone text content' })
    type?: string;
}


@Schema({
    timestamps: false,
    versionKey: false,
})
export class Blog extends BaseModel implements IBlog {
  
    @Prop({ required: true, default: 'gem stone' })
    title: string;
    @Prop({ required: true , default: null})
    content: IOcontents[];
    @Prop({ required: true, default: 'meta description' })
    metaDescription: string;
    @Prop({ required: false, default: [], _id : true, type: Array<Iimage> })
    images: Iimage[];
    @Prop({ required: false, default: {}, type: Iimage})
    video?:Iimage;
    @Prop({ required: true, default: ['a','b'] })
    categories: string[];
    @Prop({ required: false, default: false })
    views?: number;
    @Prop({ required: true, default: 'www.lithosgem.com/blog' })
    url:string;
    @Prop({ required: true, default: [], type: Array<Admin>})
    admin?: IAdmin;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
export const BlogFeature = {
    name: Blog.name,
    schema: BlogSchema,
};
