import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../Base/base.model';
import { Mixed } from '../Base/helper';
import { IAdmin,  IAdminProfile } from '@libs/interface/admin';
import { Role } from '@libs/interface';
export type AdminDocument = Admin & Document;
export const ADMIN = 'Admin';



export class AdminProfile implements IAdminProfile {
    @Prop({ required: false, default: false })
    image?: string;
    @Prop({ required: false, default: false })
    description?: string;
}
// export class AdminAccess implements IAdminAccess {
//   @Prop({ required: false, default: false })
//   userRemove: boolean;
//   @Prop({ required: false, default: false })
//   userAdd: boolean;
//   @Prop({ required: false, default: false })
//   editeBlog?: boolean;
//   @Prop({ required: false, default: false })
//   addBlog?:boolean;
//   @Prop({ required: false, default: false })
//   deleteBlog?:boolean;


// }

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
  @Prop({ required: false, default: null, type: Mixed })
  profile: AdminProfile;
//   @Prop({ required: false, default: null, type: Mixed })
//   access: AdminAccess;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);
export const AdminFeature = {
  name: Admin.name,
  schema: AdminSchema,
};
