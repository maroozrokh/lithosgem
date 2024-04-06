import { IEditAboutUs, IEditeBlog, IEditvisual, IOConteactInfo, IOExpertPerson, IOSocialMedia } from "@libs/interface";
import { ApiProperty } from "@nestjs/swagger";

import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
  } from 'class-validator';
import { VisualDto } from "../../blog/dto/add_blog.dto";






export class ConteactInfoDto implements IOConteactInfo{
    @ApiProperty({ example: 'address' })
    @IsString()
   addresstext?: string;
   @ApiProperty({ example: 'email' })
   @IsString()
    emailtext?: string;
    @ApiProperty({ example: '09393861802' })
    @IsString()
    phonetext?: string;
}

export class SocialMediaDto implements IOSocialMedia{
    @ApiProperty({ example: 'www.113.com' })
    @IsString()
    url?: string;
    @ApiProperty({ example: 'alt' })
    @IsString()
    alt?: string;
    @ApiProperty({ example: 'link' })
    @IsString()
    link?: string;
}

export class ExpertPersonDto implements IOExpertPerson{
    @ApiProperty({ example: 'description' })
    @IsString()
    description?: string;
    @ApiProperty({ example: '09393861802' })
    @IsNumber()
    order?: number ;
    @ApiProperty({ type:VisualDto })
    @IsNumber()
    personImg?:VisualDto;
}
export class EditeAboutUsDto implements IEditAboutUs{
    @ApiProperty({ type:VisualDto })
    @IsObject()
    bannerImg?: VisualDto;
    @ApiProperty({ example: 'about' })
    @IsString()
    title: string;
    @ApiProperty({ example: 'about meta' })
    @IsString()
    metaDescription: string;
    @ApiProperty({ example: 'about content' })
    @IsString()
    content?: string;
    @ApiProperty({ example: 'hgyksoihgcig34354vk/5h65i' })
    @IsString()
    mapaddress?: string;
    @ApiProperty({ type:()=>ConteactInfoDto,isArray:true})
    @IsArray()
    contactinfo?: IOConteactInfo[];
    @ApiProperty({ type:()=>SocialMediaDto,isArray:true})
    @IsArray()
    socialmedia?: SocialMediaDto[];
    @ApiProperty({ type:()=>ExpertPersonDto,isArray:true})
    @IsArray()
    person?: ExpertPersonDto[];


}

