import {  IContent_type, IEditeGem } from "@libs/interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsObject, IsString } from "class-validator";
import { ContentDto, VisualDto } from "../../blog/dto/add_blog.dto";
import { BoreshDto, GemTableDto } from "./add_gem.dto";

export class EditeGemDto implements IEditeGem{
   
        @ApiProperty({ example: 'gem title' })
        @IsString()
        title: string;
        @ApiProperty({ example: 'gem metadiscription' })
        @IsString()
        metaDescription: string;
        @ApiProperty({type: ()=>ContentDto ,isArray:true})
        @IsArray()
        content: IContent_type[];
        @ApiProperty()
        categories: string[];
        @ApiProperty({type: ()=>VisualDto ,isArray:true})
        @IsArray()
        images?: VisualDto[];
        @ApiProperty({type: ()=>VisualDto ,isArray:true})
        @IsArray()
        mapimages?: VisualDto[];
        @ApiProperty({type: ()=>VisualDto })
        @IsObject()
        video?: VisualDto;
        @ApiProperty({type: ()=>VisualDto })
        @IsObject()
        sound?: VisualDto;
        @ApiProperty({type: ()=>VisualDto })
        @IsObject()
        padcast?: VisualDto;
        @ApiProperty({example:"www.lithosgem.com/gem/firooze"})
        url: string;
        @ApiProperty({example:5})
        @IsNumber()
        popularity: number;
        @ApiProperty({type: ()=>BoreshDto })
        @IsObject()
        boresh?: BoreshDto;
        @ApiProperty({type: ()=>GemTableDto })
        @IsObject()
        table: GemTableDto;
        @ApiProperty()
        @IsNumber()
        views?: number;
        @ApiProperty()
        updatedAt?: Date;

    }
    

