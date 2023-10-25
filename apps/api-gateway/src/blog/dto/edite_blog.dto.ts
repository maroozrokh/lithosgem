// import { IEditBlog, IEditvisual, Ivisual } from "@libs/interface";
// import { ObjectId, SafeMongoIdTransform } from "@libs/schema";
// import { ApiProperty } from "@nestjs/swagger";
// import { Transform } from 'class-transformer';

// import {
//     IsBoolean,
//     IsEnum,
//     IsNumber,
//     IsObject,
//     IsOptional,
//     IsString,
//   } from 'class-validator';


// export class EditeVisualDto implements IEditvisual{

//     @ApiProperty({ example: 'url' })
//     @IsString()
//     url: string;
//     @ApiProperty({ example: 'alt' })
//     @IsString()
//     alt: string;
//     @ApiProperty({ example: 'name' })
//     @IsString()
//     name?: string;
//     @ApiProperty({ example: 'link' })
//     @IsString()
//     link?: string;

// }
// export class EditeBlogDto implements IEditBlog {
//     @ApiProperty({ example: 'title' })
//     @IsString()
//     title: string;
//     @ApiProperty({ example: 'content' })
//     @IsString()
//     content: string;
//     @ApiProperty({ example: 'meta' })
//     @IsString()
//     metaDescription: string;
//     @ApiProperty()
//     images?: EditeVisualDto[];
//     @ApiProperty({ example: 'meta' })
//     @IsObject()
//     video?: EditeVisualDto;
//     @ApiProperty()
//      categories: string[];
   

// }
