import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindOneDto } from '../../blog/dto/find_one_blog.dto';
import { ColorService } from './color.service';
import { AddColorDto, EditeColorDto, FindAllColorDto } from './dto/color.dto';
import { EditeCatDto } from '../category/dto/category.dto';


@ApiTags('Color')
@Controller('Color')
export class ColorController {
  constructor(private readonly colorService: ColorService) { }
  @ApiOperation({
    summary: 'Find all color',
    description: 'Find all color',
  })
  @Get('/color')
  // @Auth(Role.ALL)
  findAllColor(@Query() payload: FindAllColorDto) {
    return this.colorService.findAllColor(payload);
  }



  @ApiOperation({
    summary: 'Find one color',
    description: 'Find one color',
  })
  @Get('/:_id')
  // @Auth(Role.ALL)
  findOneColor(@Param() payload: FindOneDto) {
    return this.colorService.findOneColor(payload);
  }



  @ApiOperation({
    summary: 'add one color',
    description: 'add one color',
  })
  @Post()
  // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  addColor(@Body() payload: AddColorDto) {
   console.log(payload);
  return this.colorService.addColor(payload);
  }





  @ApiOperation({
    summary: 'delete one color',
    description: 'delete one color',
  })

  @Delete('/:_id')
  deleteOneColor( @Param() param: FindOneDto) {
    return this.colorService.deleteOneColor({
        ...param,
    });
  }



  @ApiOperation({
    summary: 'edite one color',
    description: 'edite one color',
  })
  @Put('/:_id')
  // @Auth(Role.ALL)
  editeColor(@Body() payload: EditeColorDto, @Param() _id: FindOneDto) {
    return this.colorService.editeColor({...payload, ..._id});
  }







}
