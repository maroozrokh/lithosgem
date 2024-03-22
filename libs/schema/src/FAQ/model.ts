 import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IUser } from '@libs/interface/user';
import { IBlog, Ivisual } from '@libs/interface/blog';
import { IFaq, IQA } from '@libs/interface/faq';

export type FaqDocument = FAQ & Document;
export const Faq = 'Faq';

@Schema({
    timestamps: false,
    versionKey: false,
})


export class Qa implements IQA {
    @Prop({ required: false, default: 'question' })
    question?: string;
    @Prop({ required: false, default: 'answer' })
    answer?: string;
}

export class FAQ extends BaseModel {
    @Prop({ required: true, default: 'title' })
    title: string;
    @Prop({ required: true, default: 'content' })
    content: string;
    @Prop({ required: true, default: 'meta' })
    metaDescription: string;
    @Prop({ required: false, default: false })
    qa?:Array<Qa>;
    @Prop({ required: false, default: false })
    categories?: string;
    @Prop({ required: false, default: false })
    from?: string;
    sendFromDate?: Date;


}
export const FagSchema = SchemaFactory.createForClass(FAQ);
export const faqFeature = {
    name: Faq,
    schema: FagSchema,
};
