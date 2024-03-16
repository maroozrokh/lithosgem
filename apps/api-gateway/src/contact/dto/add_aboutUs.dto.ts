import { ApiProperty } from "@nestjs/swagger";

import {

    IsObject,
    IsString,
  } from 'class-validator';
import { VisualDto } from "../../blog/dto/add_blog.dto";
import { IAboutUs, TAdmin } from "@libs/interface";
import { ConteactInfoDto, ExpertPersonDto, SocialMediaDto } from './edite_aboutUs.dto';


  export class AboutUsDto implements IAboutUs{
  @ApiProperty({ example: 'title contact us' })
  @IsString()
  title: string;
  @ApiProperty({ example: ' contact us metadiscription' })
  @IsString()
  metaDescription: string;
  @ApiProperty({ example: ' contact us contect' })
  @IsString()
  content?: string;
  @ApiProperty({ example: 'mapAdress' })
  @IsString()
  mapaddress?: string;
  @ApiProperty({type: ()=>ConteactInfoDto })
  @IsObject()
  contactinfo?: ConteactInfoDto[];
  @ApiProperty({type: ()=>SocialMediaDto })
  @IsObject()
  socialmedia?: SocialMediaDto[];
  @ApiProperty({type: ()=>ExpertPersonDto })
  @IsObject()
  person?: ExpertPersonDto[];
  @ApiProperty()
  amdin?:TAdmin;
  @ApiProperty()
  updatedAt?:Date;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty({type: ()=>VisualDto })
  @IsObject()
  bannerImg?: VisualDto;
  }