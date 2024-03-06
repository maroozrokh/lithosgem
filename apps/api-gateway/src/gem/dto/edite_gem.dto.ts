import { IBoresh, IEditeGem, IGem, IGemTable, IOcontent, Ivisual } from "@libs/interface";
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
        content: IOcontent[];
        @ApiProperty()
        categories: string[];
        @ApiProperty({type: ()=>VisualDto ,isArray:true})
        @IsArray()
        images?: VisualDto[];
        @ApiProperty({type: ()=>VisualDto ,isArray:true})
        @IsArray()
        mapimages?: VisualDto[];
        @IsObject()
        video?: VisualDto;
        @IsObject()
        sound?: VisualDto;
        @IsObject()
        padcast?: VisualDto;
        @ApiProperty({example:"www.lithosgem.com/gem/firooze"})
        url: string;
        @ApiProperty({example:5})
        @IsNumber()
        popularity: number;
        @IsObject()
        boresh?: BoreshDto;
        @IsObject()
        table: GemTableDto;
        @ApiProperty()
        @IsNumber()
        views?: number;
        // @ApiProperty()
        // updatedAt?: Date;

    }
    

