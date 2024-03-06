import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBoresh, IGem, IGemTable } from '@libs/interface/gem';
import { IOcontent, Ivisual } from '@libs/interface/blog';
import { IOcontents, Iimage } from '../Blogs';

export type GemDocument = Gem & Document;
export const GEM = 'Gem';

@Schema({
    timestamps: false,
    versionKey: false,
})
export class Gem extends BaseModel implements IGem {
    @Prop({ required: true, default: 'gem stone' })
    title: string;
    @Prop({ required: true, default: 'gem stone in shiraz' })
    metaDescription: string;
    @Prop({ required: true , default: null})
    content: IOcontents[];
    @Prop({ required: true, default: false })
    categories: string[];
    @Prop({ required: false, default: [], _id : true, type: Array<Iimage> })
    images?: Iimage[];
    @Prop({ required: true, default: [], _id : true, type: Array<Iimage> })
    mapimages?:   Iimage[];
    @Prop({ required: false, default: null})
    video?: Iimage;
    @Prop({ required: false, default: null})
    sound?: Iimage;
    @Prop({ required: false, default: null})
    padcast?: Iimage;
    @Prop({ required: true, default: 'www.lithosgem.com/gem' })
    url: string;
    @Prop({ required: true, default: 5})
    popularity: number;
    @Prop({ required: false, default: [], _id : true, type: Array<Iimage> })
    boresh: IBoresh;
    @Prop({ required: false, default: null, _id : true, type: {} })
    table: IGemTable;
    @Prop({ required: false, default: false })
    views?: number;

    
}


export const GemSchema = SchemaFactory.createForClass(Gem);
export const GemFeature = {
    name: GEM,
    schema: GemSchema,
};
