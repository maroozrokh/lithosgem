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
    
    @Prop({ required: false })
    url: string;
    @Prop({ required: false})
    alt: string;
    @Prop({ required: false  })
    name?: string;
    @Prop({ required: false  })
    link?: string;
    @Prop({ required: false  })
    order:number;
    @Prop({ required: false})
    categories:string[];
    

}





export const ImageSchema = SchemaFactory.createForClass(ImageSchima);
export const ImageFeature = {
    name: ImageSchima.name,
    schema: ImageSchema,
};
