import { IEditeBlog, IEditvisual, IOcontent, Ivisual } from "@libs/interface";
import { ObjectId, SafeMongoIdTransform } from "@libs/schema";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from 'class-transformer';

import {
    IsBoolean,
    IsEnum,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
  } from 'class-validator';
import { ContentDto, VisualDto } from "./add_blog.dto";


export class EditeVisualDto implements IEditvisual{
    // _id?: any;
   
   

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
    @ApiProperty({ example: 'link' })
    @IsString()
    order: number;
    @ApiProperty({ example: 'link' })
    @IsString()
    categories: string[];

}
export class EditeBlogDto implements IEditeBlog {
    @ApiProperty({ example: 'title' })
    @IsString()
    title: string;
    @ApiProperty({ example: 'content' })
    @IsString()
    blogContent: ContentDto[];
    @ApiProperty({ example: 'meta' })
    @IsString()
    metaDescription: string;
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
    // @ApiProperty()
    // admin:TAdmin;
    @ApiProperty({example:"www.lithosgem.com/blogs/about-gem-stones"})
    URL : string;
   

}


export class EditeImageDto implements IEditeBlog {
    @ApiProperty({ example: 'title' })
    @IsString()
    title: string;
    @ApiProperty({ example: 'content' })
    @IsString()
    blogContent: ContentDto[];
    @ApiProperty({ example: 'meta' })
    @IsString()
    metaDescription: string;
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
    // @ApiProperty()
    // admin:TAdmin;
    @ApiProperty({example:"www.lithosgem.com/blogs/about-gem-stones"})
    URL : string;
   

}
