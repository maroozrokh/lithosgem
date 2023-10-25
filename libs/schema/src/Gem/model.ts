import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IGem } from '@libs/interface/gemstone';
import { Ivisual } from '@libs/interface/blog';
import { Iimage } from '../Blogs';

export type GemDocument = Gem & Document;
export const GEM = 'Gem';

@Schema({
    timestamps: false,
    versionKey: false,
})
export class Gem extends BaseModel implements IGem {
    @Prop({ required: true, default: 'gem' })
     title: string;
    @Prop({ required: true, default: 'gem' })
    metaDescription: string;
    @Prop({ required: true, default: 'gem' })
    content: string;
    @Prop({ required: true, default: ['gem'] })
    categories: string[];
    @Prop({ required: false, default: false })
    images?: Iimage[];
    @Prop({ required: false, default: false })
    video?: Iimage;
    @Prop({ required: false, default: false })
    sound?: Iimage;
    @Prop({ required: false, default: false })
    padcast?: Iimage;
    @Prop({ required: false, default: false })
    color?: string;
    @Prop({ required: false, default: false })
    ductColor?: string;
    @Prop({ required: false, default: false })
    opacity?: string;
    @Prop({ required: false, default: false })
    kelivazh?: string;
    @Prop({ required: false, default: false })
    jala?: string;
    @Prop({ required: false, default: false })
    zaribShekast?: string;
    @Prop({ required: false, default: false })
    hardness?: number;
    @Prop({ required: false, default: false })
    weigth?: number;
    @Prop({ required: false, default: false })
    system?: string;
    @Prop({ required: false, default: false })
    shops?: string[];
    @Prop({ required: false, default: false })
    price?: number;
    @Prop({ required: false, default: false })
    rare?: boolean;
    @Prop({ required: false, default: false })
    boreshImg?: Ivisual[];
}


export const GemSchema = SchemaFactory.createForClass(Gem);
export const GemFeature = {
    name: GEM,
    schema: GemSchema,
};
