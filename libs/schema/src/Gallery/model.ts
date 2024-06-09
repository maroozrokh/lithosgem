import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBoresh, IGem, IGemTable } from '@libs/interface/gem';
import { IContent_type, IAssets_type, IVideo_type } from '@libs/interface/blog';
import { IContent_types } from '../Blogs';
import { ObjectId } from '../Base';

export type GalleryDocument = IimageScheme & Document;
export const GALLERY = 'Gallery';



@Schema({
    timestamps: false,
    versionKey: false,
})
export class IimageScheme extends BaseModel implements IVideo_type {
    @Prop({ required: false  })
    url: string;
    @Prop({ required: false })
    alt?: string;
    @Prop({ required: false  })
    name?: string;
    @Prop({ required: false  })
    link?: string;
    @Prop({ required: false })
    order?:number;
    @Prop({ required: false})
    categories?:string[];
    @Prop({ required: false})
    urlImg?: string ;
    @Prop({ required: false})
    type?: string;
    @Prop({ required: false})
    location?:string;
    @Prop({ required: false})
    tags?:string[];
    

}


// @Schema({ _id: true })
// export class Iimage implements IAssets_type {
//     @Prop({ required: true  })
//     url: string;
//     @Prop({ required: true })
//     alt?: string;
//     @Prop({ required: true  })
//     name?: string;
//     @Prop({ required: true  })
//     link?: string;
//     @Prop({ required: true })
//     order?:number;
//     @Prop({ required: true})
//     categories?:string[];
//     @Prop({ required: true})
//     urlImg?: string ;
//     @Prop({ required: false})
//     type?: string;
    

// }
export const GallerySchema = SchemaFactory.createForClass(IimageScheme);
export const GalleryFeature = {
    name: IimageScheme.name,
    schema: GallerySchema,
};
 