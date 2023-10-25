import { IFindOneId } from '@libs/interface';
import { ObjectId, SafeMongoIdTransform } from '@libs/schema';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class FindOneDto implements IFindOneId {
  @ApiProperty({
    description: 'Id',
    required: true,
    type: String,
    default: '64626e05af7a2a51be1b61e2',
  })
  @Transform((value) => SafeMongoIdTransform(value))
  _id: typeof ObjectId | string;
}
