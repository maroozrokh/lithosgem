import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IUser } from '@libs/interface/user';
import {  IAssets_type } from '@libs/interface/blog';
import { IAboutUs, IAdmin, IOConteactInfo, IOExpertPerson, IOSocialMedia } from '@libs/interface';

export type AboutUsDocument = AboutUs & Document;
export const ABOUTUS = 'AboutUs';

@Schema({_id:true})
export class ExpertPersonModel implements IOExpertPerson{
    @Prop({ required: false, default: ''})
    description?: string;
    @Prop({ required: false, default: 0})
    order?: number ;
    @Prop({ required: false,type: Array<IAssets_type> })
    personImg?:IAssets_type;
}

@Schema({
    timestamps: false,
    versionKey: false,
})

 
export class AboutUs extends BaseModel implements IAboutUs {
    // _id?: any;
    @Prop({ required: false, default: [], _id : true, type: Array<IAssets_type> })
    bannerImg: IAssets_type;
    @Prop({ required: true, default: 'about gemston' })
    title: string;
    @Prop({ required: true, default: 'about meta' })
    metaDescription: string;
    @Prop({ required: false, default: 'about content' })
    content?: string;
    @Prop({ required: false, default: 'about map address' })
    mapaddress?: string;
    @Prop({ required: false, default: [], _id : true, type: Array<IOConteactInfo> })
    contactinfo?: IOConteactInfo[];
    @Prop({ required: false, default: [], _id : true, type: Array<IOSocialMedia> })
    socialmedia?: IOSocialMedia[];
    @Prop({ required: false, default: [], _id : true, type: Array<IOExpertPerson> })
    person?: IOExpertPerson[];
    // amdin?: IAdmin;
    // updatedAt?: Date;

    
 



}
export const AboutUsSchema = SchemaFactory.createForClass(AboutUs);
export const AboutUsFeature = {
    name: ABOUTUS,
    schema: AboutUsSchema,
};
