import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBoresh, IGem, IGemTable } from '@libs/interface/gem';
import { IContent_type, IAssets_type } from '@libs/interface/blog';
import { IContent_types, Iimage } from '../Blogs';
import { ObjectId } from '../Base';

export type GemDocument = Gem & Document;
export const GEM = 'Gem';

@Schema({ _id: true })
export class IOGemTable implements IGemTable{
    // @Prop({ required: false, type: new Types.ObjectId, default: () => new mongoose.Types.ObjectId() })
    // _id: typeof ObjectId | string;
    @Prop({ required: false, default: ['gem red'] })
    color?:string[];
    @Prop({ required: false, default: 'red' })
    ductColor?:string;
    @Prop({ required: false, default: 'red' })
    opacity?:string;
    @Prop({ required: false, default: 'red' })
    kelivazh?:string;
    @Prop({ required: false, default: 'red' })
    jala?:string;
    @Prop({ required: false, default: 'red' })
    zaribShekast?:string;
    @Prop({ required: false, default: 0 })
    hardness?:number;
    @Prop({ required: false, default: 1 })
    weigth?:number;
    @Prop({ required: false, default: 'red' })
    system?:string;
    // shops?:Array<string>;
    @Prop({ required: false, default: 0 })
    price?:number;
    @Prop({ required: false, default:false })
    rare?:boolean;
    @Prop({ required: false, default: 1 })
    order?: number;

}

@Schema({ _id: true })
export class IOBoresh implements IBoresh{
    @Prop({ required: false, default: 1 })
    order?: number;
    @Prop({ required: false,type: Array<Iimage>, _id:true })
    boreshImg?: IAssets_type[];
    @Prop({ required: false})
    type?: string;

}

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
    content: IContent_types[];
    @Prop({ required: true, default: false })
    categories: string[];
    @Prop({ required: false, default: [], _id : true, type: Array<IAssets_type> })
    images?: IAssets_type[];
    @Prop({ required: false, default: [], _id : true, type: Array<IAssets_type> })
    mapimages?:   IAssets_type[];
    @Prop({ required: false, default: null,type: Iimage})
    video?: Iimage;
    @Prop({ required: false, default: null,type: Iimage})
    sound?: Iimage;
    @Prop({ required: false, default: null,type: Iimage})
    padcast?: Iimage;
    @Prop({ required: true, default: 'www.lithosgem.com/gem' })
    url: string;
    @Prop({ required: true, default: 5})
    popularity: number;
    @Prop({ required: false, default: [], _id : true, type: Array<IAssets_type> })
    boresh?: IOBoresh;
    @Prop({ required: false, _id : true, type: IOGemTable, default: () => new mongoose.Types.ObjectId() })
    // @Prop({ required: false, _id : true, type: IOGemTable })
    table: IOGemTable;
    @Prop({ required: false, default: false })
    views?: number;
    
}


export const GemSchema = SchemaFactory.createForClass(Gem);
export const GemFeature = {
    name: Gem.name,
    schema: GemSchema,
};
 