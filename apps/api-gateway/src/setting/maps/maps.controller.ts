import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindOneDto } from '../../blog/dto/find_one_blog.dto';
import {  MapsService } from './maps.service';
import { EditeCatDto } from '../category/dto/category.dto';
import { AddMapsDto, FindAllMapsDto } from './dto/maps.dto';


@ApiTags('Maps')
@Controller('Maps')
export class MapsController {
constructor(private mapsService: MapsService){}
  @ApiOperation({
    summary: 'Find all maps',
    description: 'Find all maps',
  })
  @Get('/maps')
  // @Auth(Role.ALL)
  findAllMaps(@Query() payload: FindAllMapsDto) {
    return this.mapsService.findAllMaps(payload);
  }



  @ApiOperation({
    summary: 'Find one maps',
    description: 'Find one maps',
  })
  @Get('/:_id')
  // @Auth(Role.ALL)
  findOneMaps(@Param() payload: FindOneDto) {
    return this.mapsService.findOneMaps(payload);
  }



  @ApiOperation({
    summary: 'add one maps',
    description: 'add one maps',
  })
  @Post()
  // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  addMaps(@Body() payload: AddMapsDto) {
   console.log(payload);
  return this.mapsService.addMaps(payload);
  }





  @ApiOperation({
    summary: 'delete one mpas',
    description: 'delete one maps',
  })

  @Delete('/:_id')
  deleteOneMaps( @Param() param: FindOneDto) {
    return this.mapsService.deleteOneMaps({
        ...param,
    });
  }



  @ApiOperation({
    summary: 'edite one map',
    description: 'edite one mpa',
  })
  @Put('/:_id')
  // @Auth(Role.ALL)
  editeMaps(@Body() payload: AddMapsDto, @Param() _id: FindOneDto) {
    return this.mapsService.editeMaps({...payload, ..._id});
  }







}
