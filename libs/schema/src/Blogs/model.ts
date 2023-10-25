import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBlog, IOcontent, Ivisual } from '@libs/interface/blog';
export type BlogDocument = Blog & Document;
export const BLOG = 'Blog';

@Schema({
    timestamps: false,
    versionKey: false,
})

export class Iimage implements Ivisual {
    @Prop({ required: true, default: 'bvghjl2u3n46njbjnb' })
    url: string;
    @Prop({ required: true, default: 'gem stone' })
    alt: string;
    @Prop({ required: true, default: 'gem stone' })
    name?: string;
    @Prop({ required: true, default: false })
    link?: string;
    order:number

}

export class IOcontents implements IOcontent{
    @Prop({ required: true, default: 1 })
    order: number;
    @Prop({ required: true, default: 'gem stone' })
    text: string;

}
export class Blog extends BaseModel implements IBlog {
    @Prop({ required: true, default: 'gem stone' })
    title: string;
    @Prop({ required: true})
    content: Array<IOcontents>;
    @Prop({ required: true, default: 'meta description' })
    metaDescription: string;
    @Prop({ required: false, default: false })
    images?: Array<Iimage>;
    @Prop({ required: false, default: false })
    video?: Iimage;
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
