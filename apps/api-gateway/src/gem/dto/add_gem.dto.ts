import { IBoresh, IGemTable } from './../../../../../libs/interface/src/gem/index';
import { IGem, IOcontent, Ivisual } from "@libs/interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsObject, IsString } from "class-validator";
import { ContentDto, VisualDto } from "../../blog/dto/add_blog.dto";



export class BoreshDto implements IBoresh{
    @ApiProperty({example:1})
    @IsNumber()
    order: number;
    @ApiProperty()
    @IsArray()
    boreshImg?: VisualDto[];

}

export class GemTableDto implements IGemTable{
    @ApiProperty({ example: ['red','blue'] })
    @IsArray()
    color?: string[];
    @ApiProperty({ example: 'red' })
    @IsString()
    ductColor?: string;
    @ApiProperty({ example: 'shafaf' })
    @IsString()
    opacity?: string;
    @ApiProperty({ example: 'kelivazh' })
    @IsString()
    kelivazh?: string;
    @ApiProperty({ example: 'jala' })
    @IsString()
    jala?: string;
    @ApiProperty({ example: 'zaribshekast' })
    @IsString()
    zaribShekast?: string;
    @ApiProperty({ example: 10 })
    @IsNumber()
    hardness?: number;
    @ApiProperty({ example: 10.22 })
    @IsNumber()
    weigth?: number;
    @ApiProperty({ example: 'سیستم خاکی آتشفشانی'})
    @IsString()
    system?: string;
    // shops?: string[];
    @ApiProperty({ example: 3})
    @IsNumber()
    price?: number;
    @ApiProperty({ example: true})
    @IsBoolean()
    rare?: boolean;
    @ApiProperty({type: ()=>VisualDto ,isArray:true})
    @IsArray()
    boreshImg?: VisualDto[];
    @ApiProperty({ example: 1})
    @IsNumber()
    order?: number;

}

export class AddGemDto implements IGem {
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
    @ApiProperty()
    updatedAt?: Date;
    @ApiProperty()
    createdAt?: Date;
}