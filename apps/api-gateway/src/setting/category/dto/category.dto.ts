import { IAdmin, IBlog,IFindOneByCondition,IOcontent, Ivisual, TAdmin } from "@libs/interface";
import { ICategory, IFindAllCat } from "@libs/interface/setting";
import { SafeMongoIdTransform } from "@libs/schema";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";

import {
    IsArray,
    IsInt,
    IsOptional,
    IsString,
  } from 'class-validator';




  export class FindOneSettingDto implements IFindOneByCondition {
   
    @ApiProperty({
      required: true,
      type: String,
      default: 'asd',
    })
    @Transform((value) => SafeMongoIdTransform(value))
     condition: string;
  }


export class AddCatDto implements ICategory{
    @ApiProperty({example:'red'})
    @IsString()
    name: string;
    @ApiProperty({example:['red','blue']})
    @IsArray()
    typeCat: string[];
    @ApiProperty()
    updatedAt?: Date;
    @ApiProperty()
    createdAt?: Date;
    @ApiProperty()
    admin?: TAdmin;
   
}
 export class EditeCatDto implements ICategory{
    @ApiProperty({example:'red'})
    @IsString()
    name:string;    @ApiProperty({example:['red','blue']})
    @IsArray()
    typeCat:string[];

   



}

export class FindAllCatDto implements IFindAllCat{
  cat?: any;
  @ApiPropertyOptional({ example: 0 })
  @IsInt()
  @Type(() => Number)
  page: number;
  @ApiPropertyOptional({ example: 10 })
  @IsInt()
  @Type(() => Number)
  count: number;
  @ApiPropertyOptional()
  @IsOptional()
  query: any;
}


 