import { ObjectId } from '@libs/schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBlog, IOcontent, Ivisual } from '@libs/interface/blog';
export type ImageDocument = ImageSchima & Document;

@Schema({
    timestamps: false,
    versionKey: false,
})
export class ImageSchima implements Ivisual {
    // @Prop({ type: 'ObjectId', auto: true })
    // _ID:Types.ObjectId;

    @Prop({ required: true, default: 'bvghjl2u3n46njbjnb' })
    url: string;
    @Prop({ required: true, default: 'gem stone' })
    alt: string;
    @Prop({ required: true, default: 'gem stone' })
    name?: string;
    @Prop({ required: true, default: false })
    link?: string;
    @Prop({ required: true, default: 1 })
    order:number;
    @Prop({ required: true})
    categories:string[];
    

}





export const ImageSchema = SchemaFactory.createForClass(ImageSchima);
export const ImageFeature = {
    name: ImageSchima.name,
    schema: ImageSchema,
};
