import { IEditeBlog, TAdmin } from "@libs/interface";
import { ApiProperty } from "@nestjs/swagger";

import {

  IsArray,
    IsNumber,
    IsObject,
    IsString,
  } from 'class-validator';
import { IndexImageObjectDto, VisualDto } from "./add_index.dto";
import { IEditedIndex } from "@libs/interface/indexInterface";




export class EditeIndexDto implements IEditedIndex {
  @ApiProperty({example:'this is an example for lithos website'})
  @IsString()
  title?:string;
  @ApiProperty({example:'this is an example for lithos website'})
  @IsString()
  metaDescription?: string;
  @ApiProperty({type: ()=>VisualDto ,isArray:true})
  @IsArray()
  slider?: VisualDto[];
  @ApiProperty({type: ()=>IndexImageObjectDto ,isArray:true})
  @IsArray()
  whyUs?: IndexImageObjectDto[];
  @ApiProperty()
  @IsObject()
  indexExpert?:IndexImageObjectDto;
  @ApiProperty({type: ()=>IndexImageObjectDto ,isArray:true})
  @IsArray()
  indexBoresh?: IndexImageObjectDto[];
  @ApiProperty()
  updatedAt?:Date;
  @ApiProperty()
  createdAt?: Date;
   

}

