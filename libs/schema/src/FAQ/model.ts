 import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IUser } from '@libs/interface/user';
import { IBlog, IAssets_type } from '@libs/interface/blog';
import { IFaq, IQA } from '@libs/interface/faq';

export type FaqDocument = Faq & Document;
export const FAQ = 'Faq';

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
@Schema({
    timestamps: false,
    versionKey: false,
})

export class Faq extends BaseModel {
    @Prop({ required: true, default: 'title' })
    title: string;
    // @Prop({ required: true, default: 'content' })
    // content: string;
    @Prop({ required: true, default: 'meta' })
    metaDescription: string;
    @Prop({ required: false, default: false })
    qa?:Array<Qa>;
    // @Prop({ required: false, default: false })
    // categories?: string;
    @Prop({ required: false, default: false })
    from?: string;
    sendFromDate?: Date;


}
export const FagSchema = SchemaFactory.createForClass(Faq);
export const FAQFeature = {
    name: FAQ,
    schema: FagSchema,
};
