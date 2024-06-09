import { IBoresh, IGemTable } from './../../../../../libs/interface/src/gem/index';
import { IAssets_type, IGem } from "@libs/interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsObject, IsString } from "class-validator";
import { ContentDto, VisualDto } from "../../blog/dto/add_blog.dto";



export class BoreshDto implements IBoresh{
    @ApiProperty({example:1})
    @IsNumber()
    order: number;
    @ApiProperty({type: ()=>VisualDto ,isArray:true})
    @IsArray()
    boreshImg?: VisualDto[];
    @ApiProperty()
    @IsString()
    type?: string;

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
    @ApiProperty({ example: 3})
    @IsNumber()
    price?: number;
    @ApiProperty({ example: true})
    @IsBoolean()
    rare?: boolean;
    @ApiProperty({ example: 1})
    @IsNumber()
    order?: number;
    @ApiProperty({ example: 'type'})
    @IsString()
    type?: string;  

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
    content: ContentDto[];
    @ApiProperty()
    categories: string[];
    @ApiProperty({type: ()=>VisualDto ,isArray:true})
    @IsArray()
    images?: VisualDto[];
    @ApiProperty({type: ()=>VisualDto ,isArray:true})
    @IsArray()
    mapimages?: VisualDto[];
    @ApiProperty({type: ()=>VisualDto})
    @IsObject()
    video?: VisualDto;
    @ApiProperty({type: ()=>VisualDto})
    @IsObject()
    sound?: VisualDto;
    @ApiProperty({type: ()=>VisualDto})
    @IsObject()
    padcast?: VisualDto;
    @ApiProperty({example:"www.lithosgem.com/gem/firooze"})
    url: string;
    @ApiProperty({example:5})
    @IsNumber()
    popularity: number;
    @ApiProperty({type: ()=>BoreshDto})
    @IsObject()
    boresh?: BoreshDto;
    @ApiProperty({type: ()=>GemTableDto})
    @IsObject()
    gemTable?: GemTableDto;
    @ApiProperty()
    @IsNumber()
    views?: number;
    @ApiProperty()
    updatedAt?: Date;
    @ApiProperty()
    createdAt?: Date;
}