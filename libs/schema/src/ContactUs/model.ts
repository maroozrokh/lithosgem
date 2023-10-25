import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IUser } from '@libs/interface/user';
import { IBlog, Ivisual } from '@libs/interface/blog';
import { IContact } from '@libs/interface/contact';

export type ContactDocument = Contact & Document;
export const CONTACT = 'Contact';

@Schema({
    timestamps: false,
    versionKey: false,
})

 
export class Contact extends BaseModel implements IContact {
    @Prop({ required: true, default: 'title' })

    title: string;
    @Prop({ required: true, default: 'content' })

    content: string;
    @Prop({ required: true, default: 'meta' })

    metaDescription: string;
    @Prop({ required: true, default: 'title' })

    socialMedia?: Ivisual[];
    images?: Ivisual[];
    map?: string;
 



}
export const ContactSchema = SchemaFactory.createForClass(Contact);
export const ContactFeature = {
    name: CONTACT,
    schema: ContactSchema,
};
