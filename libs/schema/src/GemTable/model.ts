import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IBoresh, IGem, IGemTable } from '@libs/interface/gem';
import { IOcontents, Iimage } from '../Blogs';

export type GemTableDocument = GemTable & Document;
export const GEMTABLE = 'GemTable';

@Schema({
    timestamps: false,
    versionKey: false,
})
export class GemTable extends BaseModel implements IGemTable {
    @Prop({ required: false, default: ['gem color'] })
    color?:string[];
    @Prop({ required: false, default: 'gem dust' })
    ductColor?:string;
    @Prop({ required: false, default: 'shafaf' })
    opacity?:string;
    @Prop({ required: false, default: 'kelivazh' })
    kelivazh?:string;
    @Prop({ required: false, default: 'jala' })
    jala?:string;
    @Prop({ required: false, default: 'zaribshekast' })
    zaribShekast?:string;
    @Prop({ required: false, default: 4 })
    hardness?:number;
    @Prop({ required: false, default: 4 })
    weigth?:number;
    @Prop({ required: false, default: 'system' })
    system?:string;
    // shops?:Array<string>;
    @Prop({ required: false, default: 3 })
    price?:number;
    @Prop({ required: false, default: true })
    rare?:boolean;
    // @Prop({ required: false, default: [], _id : true, type: Array<Iimage> })
    // boreshImg?:Iimage[];
    @Prop({ required: false, default: 2 })
    order?: number;

    
}


export const GemTableSchema = SchemaFactory.createForClass(GemTable);
export const GemTableFeature = {
    name: GEMTABLE,
    schema: GemTableSchema,
};
