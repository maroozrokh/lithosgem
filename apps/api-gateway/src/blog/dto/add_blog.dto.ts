import { IAssets_type, IBlog,IContent_type,TAdmin, } from "@libs/interface";
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
 export class ContentDto implements IContent_type{
    @ApiProperty({example:1})
    @IsNumber()
     order: number;
     @ApiProperty({example:'this is an example for gem ston(lithos) website'})
     @IsString()
     text: string;
     @ApiProperty({example:'this is an example for gem ston(lithos) website'})
     @IsString()
     format?: string;
     @ApiProperty({example:'this is an example for gem ston(lithos) website'})
     @IsString()
     type?: string;
}
export class AddBlogDto implements IBlog {
    @ApiProperty({ example: 'title' })
    @IsString()
    title: string;
    @ApiProperty({type: ()=>ContentDto ,isArray:true})
    @IsArray()
    content: ContentDto[];
    @ApiProperty({ example: 'meta' })
    @IsString()
    metaDescription: string;
    @ApiProperty({type: ()=>VisualDto ,isArray:true})
    @IsArray()
    images?: VisualDto[];
    @ApiProperty()
    @IsObject()
    video?: VisualDto;
    @ApiProperty()
    categories: string[];
    @ApiProperty()
    @IsNumber()
    views?: number;
    @ApiProperty()
    updatedAt?: Date;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    admin:TAdmin;
    @ApiProperty({example:"www.lithosgem.com/blogs/about-gem-stones"})
    url : string;

}

 