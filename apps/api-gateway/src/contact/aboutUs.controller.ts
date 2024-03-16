
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindOneDto } from './dto/find_aboutUs.dto';
import { AboutUsService } from './aboutUs.service';
import { AboutUsDto } from './dto/add_aboutUs.dto';
import { EditeAboutUsDto } from './dto/edite_aboutUs.dto';


@ApiTags('About-us')
@Controller('about-us')
export class AboutUsController {
  constructor(private readonly aboutUsService: AboutUsService) { }


  @ApiOperation({
    summary: 'get about us page',
    description: 'get about us page',
  })
  @Get('/:_id')
  // @Auth(Role.ALL)
  getAboutPage(@Param() payload: FindOneDto) {
    return this.aboutUsService.findAboutUsPage(payload);
  }





  @ApiOperation({
    summary: 'add about us',
    description: 'add about us',
  })
  @Post()
  // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  addAboutUs(@Body() payload: AboutUsDto) {
     return this.aboutUsService.addAboutUs(payload);
  }




  @ApiOperation({
    summary: 'edite about us page',
    description: 'edite about us page',
  })
  @Put('/:_id')
  // @Auth(Role.ALL)
  editeAboutUs(@Body() payload: EditeAboutUsDto, @Param() id: FindOneDto) {
    return this.aboutUsService.updateAboutUsPage({...payload, ...id});
  }





  


}
