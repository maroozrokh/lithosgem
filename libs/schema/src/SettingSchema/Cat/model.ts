import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../../Base/base.model';
import { ICategory } from '@libs/interface/setting';

export type CatDocument = Category & Document;
export const CAT = 'Category';


@Schema({
    timestamps: false,
    versionKey: false,
})
 
export class Category extends BaseModel implements ICategory {
    @Prop({ required: true, default: 'stones' })
    name: string;
    @Prop({ required: true, default: ['blog','gem','gallery'] })
    typeCat: string[];
    // admin?: IAdmin;
}

export const CatSchema = SchemaFactory.createForClass(Category);
export const CatFeature = {
    name: CAT,
    schema: CatSchema,
};
