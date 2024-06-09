import { IAssets_type, IBlog,IContent_type,TAdmin, } from "@libs/interface";
import { IindexImageObject, IindexType } from "@libs/interface/indexInterface";
import { ApiProperty } from "@nestjs/swagger";

import {
    IsArray,
    IsNumber,
    IsObject,
    IsString,
  } from 'class-validator';


export class VisualDto implements IAssets_type{
    @ApiProperty({ example: 'url' })
    @IsString()
    url: string;
    @ApiProperty({ example: 'alt' })
    @IsString()
    alt: string;
    @ApiProperty({ example: 'name' })
    @IsString()
    name?: string;
    @ApiProperty({ example: 'link' })
    @IsString()
    link?: string;
    @ApiProperty({ example: 1 })
    @IsNumber()
    order?: number;
    @ApiProperty({ example: 'url poster' })
    @IsString()
    urlImg?: string ;
    @ApiProperty({ example: 'type' })
    @IsString()
    type?: string;

}


export class IndexImageObjectDto implements IindexImageObject{
    @ApiProperty({type: ()=>VisualDto ,isArray:true})
    @IsArray()
    image?: VisualDto;
    @ApiProperty({example:'this is an example for lithos website'})
    @IsString()
    text?: string;
  }


export class AddIndexDto implements IindexType {
    @ApiProperty({example:'this is an example for lithos website'})
    @IsString()
    title?:string;
    @ApiProperty({example:'this is an example for lithos website'})
    @IsString()
    metadescription?: string;
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
    // admin?: IAdmin; 

}

 