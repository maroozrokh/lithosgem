import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../../Base/base.model';
import { IColor, IMaps } from '@libs/interface/setting';
import { IAssets_type } from '@libs/interface';

export type MapsDocument = Maps & Document;
export const MAPS = 'Maps';


@Schema({
    timestamps: false,
    versionKey: false,
})
 
export class Maps extends BaseModel implements IMaps {
   
    @Prop({ required: false, default: [], _id : true, type: Array<IAssets_type> })
    irimage?: IAssets_type;
    @Prop({ required: false, default: [], _id : true, type: Array<IAssets_type> })
    woimage?: IAssets_type;
    @Prop({ required: true, default: 'black' })
    title: string;

    // updatedAt?: Date;
    // admin?: IAdmin;

}

export const MapsSchema = SchemaFactory.createForClass(Maps);
export const MapsFeature = {
    name: MAPS,
    schema:MapsSchema,
};
