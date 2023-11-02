import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBlog, IOcontent, Ivisual } from '@libs/interface/blog';
import { ImageSchima } from '../ImageSchima';
import { Mixed } from '../Base';
export type BlogContentDocument = BlogContent & Document;
export const BLOG = 'Blog';



@Schema({
    timestamps: false,
    versionKey: false,
})
 class BlogContent implements IOcontent{
    @Prop({ required: true, default: 1})
    order: number;
    @Prop({ required: true, default: 'gem stone text content' })
    text: string;

}




export const BlogContentSchema = SchemaFactory.createForClass(BlogContent);
export const BlogContentFeature = {
    name: BlogContent.name,
    schema: BlogContentSchema,
};
