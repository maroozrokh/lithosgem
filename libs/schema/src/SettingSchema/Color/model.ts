import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../../Base/base.model';
import { IUser } from '@libs/interface/user';
import { IBlog, Ivisual } from '@libs/interface/blog';
import { IAboutUs, IAdmin, IOConteactInfo, IOExpertPerson, IOSocialMedia } from '@libs/interface';
import { ICategory, IColor } from '@libs/interface/setting';

export type ColorDocument = Color & Document;
export const COLOR = 'Color';


@Schema({
    timestamps: false,
    versionKey: false,
})
 
export class Color extends BaseModel implements IColor {
    @Prop({ required: true, default: 'black' })
    colorName: string;
    @Prop({ required: true, default: '#121212' })
    colorCode: string;
    // updatedAt?: Date;
    // admin?: IAdmin;

}

export const ColorSchema = SchemaFactory.createForClass(Color);
export const ColorFeature = {
    name: COLOR,
    schema: ColorSchema,
};
