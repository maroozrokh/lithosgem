import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { IUser } from '@libs/interface/user';
 
export type UserDocument = User & Document;
export const USER = 'User';

@Schema({
  timestamps: false,
  versionKey: false,
})
export class User extends BaseModel implements IUser {
  @Prop({ required: false, default: false })
  name: string;
  @Prop({ required: false, default: false })
  email: string;
  @Prop({ required: false, default: false })
  password?: string;
  @Prop({ required: false, default: false })
  phone?: number;

 
}
export const UserSchema = SchemaFactory.createForClass(User);
export const UserFeature = {
  name: USER,
  schema: UserSchema,
};
