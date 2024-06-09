import { IFindAllVideos } from '@libs/interface/gallery';
import { IFindAllQa } from '../../../../../libs/interface/src/faq/index';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
export class FindAllGalleryDto implements IFindAllVideos {
  video?: any;
  @ApiPropertyOptional({ example: 0 })
  @IsInt()
  @Type(() => Number)
  page: number;
  @ApiPropertyOptional({ example: 10 })
  @IsInt()
  @Type(() => Number)
  count: number;
  @ApiPropertyOptional()
  @IsOptional()
  query: any;
  // @ApiPropertyOptional({example: ['sport','sport2']})
  // @IsOptional()
  // category?: Array<string> ;
}