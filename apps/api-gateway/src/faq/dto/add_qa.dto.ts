import { IEditeFaq, IFaq, IFindFAQ } from '@libs/interface/faq';
import { IAssets_type, IBlog,IContent_type,IQA,TAdmin, } from "@libs/interface";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

import {
    IsArray,
    IsNumber,
    IsObject,
    IsOptional,
      IsString,
  } from 'class-validator';





export class AddQADto implements IQA {
    @ApiProperty({ example: 'Q1' })
     @IsString()
     question?:string;
     @ApiProperty({ example: 'answer 1' })
     @IsString()
     answer?:string;
 
 
 }

export class FAQPageDto implements IFaq{
    @ApiProperty({ example: 'title' })
    @IsString()
    title: string;
    @ApiProperty({ example: 'meta' })
    @IsString()
    metaDescription: string;
    @ApiProperty({type: ()=>AddQADto ,isArray:true})
    @IsArray()
    qa?: AddQADto[];
    from?: string;
    sendFromDate?: Date;

}

export class EditeFaqDto implements IEditeFaq {
    @ApiProperty({ example: 'title' })
    @IsString()
    title: string;
    @ApiProperty({ example: 'meta' })
    @IsString()
    metaDescription: string;
    @ApiProperty({type: ()=>AddQADto ,isArray:true})
    @IsArray()
    qa?: AddQADto[];

 
 
 }


 export class FindFAQPageDto implements IFindFAQ {
    faq?: any;    
    @ApiPropertyOptional()
    @IsOptional()
    query: any;

  }


 