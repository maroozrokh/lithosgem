import { IAdmin, IBlog,IFindOneByCondition,IContent_type, IAssets_type, TAdmin } from "@libs/interface";
import { ICategory, IColor, IEditeColor, IFindAllCat, IFindAllColor, IFindAllMaps, IMaps } from "@libs/interface/setting";
import { SafeMongoIdTransform } from "@libs/schema";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { VisualDto } from "apps/api-gateway/src/blog/dto/add_blog.dto";
import { Transform, Type } from "class-transformer";

import {
    IsInt,
    IsObject,
    IsOptional,
    IsString,
  } from 'class-validator';





export class AddMapsDto implements IMaps{
  _id: any;
  @ApiProperty({type: ()=>VisualDto})
  @IsObject()
  irimage?: VisualDto;
  @ApiProperty({type: ()=>VisualDto })
  @IsObject()
  woimage?: VisualDto;
  @ApiProperty({example:'red'})
  @IsString()
  title:string;
    
   
}


export class FindAllMapsDto implements IFindAllMaps{
  maps?: any;
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


 