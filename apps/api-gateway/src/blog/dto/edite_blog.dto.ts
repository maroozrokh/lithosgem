import { IEditeBlog, TAdmin } from "@libs/interface";
import { ApiProperty } from "@nestjs/swagger";

import {

    IsNumber,
    IsObject,
    IsString,
  } from 'class-validator';
import { ContentDto, VisualDto } from "./add_blog.dto";


export class EditeBlogDto implements IEditeBlog {
    @ApiProperty({ example: 'title' })
    @IsString()
    title: string;
    @ApiProperty({ example: 'content' })
    @IsString()
    content: ContentDto[];
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
    @ApiProperty()
    admin:TAdmin;
    @ApiProperty({example:"www.lithosgem.com/blogs/about-gem-stones"})
    url : string;
   

}


// export class EditeImageDto implements IEditeBlog {
//     @ApiProperty({ example: 'title' })
//     @IsString()
//     title: string;
//     @ApiProperty({ example: 'content' })
//     @IsString()
//     blogContent: ContentDto[];
//     @ApiProperty({ example: 'meta' })
//     @IsString()
//     metaDescription: string;
//     images?: VisualDto[];
//     @ApiProperty()
//     @IsObject()
//     video?: VisualDto;
//     @ApiProperty()
//     categories: string[];
//     @ApiProperty()
//     @IsNumber()
//     views?: number;
//     @ApiProperty()
//     updatedAt?: Date;
//     @ApiProperty()
//     createdAt: Date;
//     // @ApiProperty()
//     // admin:TAdmin;
//     @ApiProperty({example:"www.lithosgem.com/blogs/about-gem-stones"})
//     URL : string;
   

// }
