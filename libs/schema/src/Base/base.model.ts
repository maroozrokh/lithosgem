import { Prop } from '@nestjs/mongoose/dist/decorators';


export abstract class BaseModel {
  @Prop({ default: () => new Date().getUTCDate() })
  createdAt: Date; // provided by schemaOptions.timestamps
}
