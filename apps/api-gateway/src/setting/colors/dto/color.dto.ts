import { IAdmin, IBlog,IFindOneByCondition,IContent_type, IAssets_type, TAdmin } from "@libs/interface";
import { ICategory, IColor, IEditeColor, IFindAllCat, IFindAllColor } from "@libs/interface/setting";
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


export class AddColorDto implements IColor{
  @ApiProperty({example:'red'})
  @IsString()
    colorName: string;
    @ApiProperty({example:'#ffffff'})
    @IsString()
    colorCode: string;
    
   
}
 export class EditeColorDto implements IEditeColor{
  @ApiProperty({example:'#red'})
  @IsString()
    colorName: string;
    @ApiProperty({example:'#ffffff'})
    @IsString()
    colorCode: string;

   



}

export class FindAllColorDto implements IFindAllColor{
  color?: any;
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


 