import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBlog, IContent_type, IAssets_type } from '@libs/interface/blog';
import { ImageSchima } from '../ImageSchima';
import { Mixed } from '../Base';
export type BlogContentDocument = BlogContent & Document;
export const BLOG = 'Blog';



@Schema({
    timestamps: false,
    versionKey: false,
    // _id:false,
})
 class BlogContent implements IContent_type{
    @Prop({ required: false })
    order: number;
    @Prop({ required: false })
    text: string;
 

}




export const BlogContentSchema = SchemaFactory.createForClass(BlogContent) ;
export const BlogContentFeature = {
    name: BlogContent.name,
    schema: BlogContentSchema,
 
};
