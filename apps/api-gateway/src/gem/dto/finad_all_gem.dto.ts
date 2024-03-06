import {  IFindAllGem } from '@libs/interface';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
export class FindAllGemDto implements IFindAllGem {
  gem?: any;
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
  @ApiPropertyOptional({example: ['atashfeshani','khaki']})
  @IsOptional()
  category?: Array<string> ;
}