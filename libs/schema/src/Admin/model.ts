import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { Mixed } from '../Base/helper';
import { IAdmin,  IAdminProfile } from '@libs/interface/admin';
import { Ivisual, Role } from '@libs/interface';
import { Iimage } from '../Blogs';
export type AdminDocument = Admin & Document;
export const ADMIN = 'Admin';



@Schema({
  timestamps: false,
  versionKey: false,
})
export class Admin extends BaseModel implements IAdmin {
  @Prop({ required: false, default: null })
  name?: string;
  @Prop({ required: false, default: null })
  email?: string;
  @Prop({ required: false, default: null })
  password?: string;
  @Prop({
    required: false,
    default: Role.ADMIN,
    enum: Role,
    type: 'string',
  })
  role: Role;
  @Prop({ required: false, default: [], _id : true, type: Array<Iimage> })
  profile: Ivisual;
//   @Prop({ required: false, default: null, type: Mixed })
//   access: AdminAccess;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);
export const AdminFeature = {
  name: Admin.name,
  schema: AdminSchema,
};
