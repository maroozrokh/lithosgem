import { IAdmin, IAdminAccess, IAdminProfile, IBlog, IContact, IOcontent, Ivisual, Role, TAdmin } from "@libs/interface";
import { ImageSchima, ObjectId, SafeMongoIdTransform } from "@libs/schema";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from 'class-transformer';

import {
    IsArray,
    IsBoolean,
    IsDate,
    IsEnum,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
  } from 'class-validator';


export class VisualDto implements Ivisual{
    // @ApiProperty({
    //     description: 'Id',
    //     required: true,
    //     type: String,
    //     default: '64626e05af7a2a51be1b61e2',
    // })
    // @Transform((value) => SafeMongoIdTransform(value))
    // _id: typeof ObjectId | string;
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
    order: number;
    @ApiProperty()
    @IsArray()
    categories:Array<string>;

}
 export class ContentDto implements IOcontent{
    @ApiProperty({example:1})
    @IsNumber()
     order: number;
     @ApiProperty({example:'this is an example for gem ston(lithos) website'})
     @IsString()
     text: string;


}
export class AddBlogDto implements IBlog {
    @ApiProperty({ example: 'title' })
    @IsString()
    title: string;
    @ApiProperty()
    @IsArray()
    blogCcontent: ContentDto[];
    @ApiProperty({ example: 'meta' })
    @IsString()
    metaDescription: string;
    @ApiProperty()
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
    URL : string;

}

 