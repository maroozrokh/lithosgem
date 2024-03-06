import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBlog, IOcontent, Ivisual } from '@libs/interface/blog';
import { ImageSchima } from '../ImageSchima';
import { Mixed } from '../Base';
export type BlogDocument = Blog & Document;
export const BLOG = 'Blog';


// @Schema({ _id: true })
export class Iimage implements Ivisual {
    // @Prop({ required: false, unique: true, auto: true, })
    // _id?: Types.ObjectId;

    @Prop({ required: true  })
    url: string;
    @Prop({ required: true })
    alt: string;
    @Prop({ required: true  })
    name?: string;
    @Prop({ required: true  })
    link?: string;
    @Prop({ required: true })
    order:number;
    @Prop({ required: true})
    categories:string[];
    

}

export class IOcontents implements IOcontent{
    @Prop({ required: true, default: 1})
    order: number;
    @Prop({ required: true, default: 'gem stone text content' })
    text: string;

}


@Schema({
    timestamps: false,
    versionKey: false,
})
export class Blog extends BaseModel implements IBlog {
    @Prop({ required: true, default: 'gem stone' })
    title: string;
    @Prop({ required: true , default: null})
    blogCcontent: IOcontents[];
    @Prop({ required: true, default: 'meta description' })
    metaDescription: string;
    @Prop({ required: false, default: [], _id : true, type: Array<Iimage> })
    images: Iimage[];
    @Prop({ required: false, default: null})
    video?:Iimage;
    @Prop({ required: true, default: false })
    categories: string[];
    @Prop({ required: false, default: false })
    views?: number;
    @Prop({ required: true, default: 'www.lithosgem.com/blog' })
    URL:string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
export const BlogFeature = {
    name: Blog.name,
    schema: BlogSchema,
};
