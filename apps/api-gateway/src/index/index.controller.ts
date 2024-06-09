import { Payload } from '@nestjs/microservices';
import { Body, Controller,  Get,   Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IndexService } from './index.service';
import {  FindOneDto} from './dto/find_index.dto';
import {  AddIndexDto } from './dto/add_index.dto';
import {  EditeIndexDto } from './dto/edite_index.dto';
import { Blog } from '@libs/schema';
import { FindAllBlogDto } from '../blog/dto/finad_all_blog.dto';
import { FindAllGemDto } from '../gem/dto/finad_all_gem.dto';
// import { EditeBlogDto } from './dto/edite_blog.dto';


@ApiTags('Index')
@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) { }



  @ApiOperation({
    summary: 'Find index',
    description: 'Find index',
  })
  @Get('/:_id')
  // @Auth(Role.ALL)
  findIndex(@Param() payload: FindOneDto) {
    return this.indexService.findIndex(payload);
  }



  @ApiOperation({
    summary: 'add index',
    description: 'add index',
  })
  @Post()
  // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  addBIndex(@Body() payload: AddIndexDto) {
   
    return this.indexService.addIndex(payload);
  }





  @ApiOperation({
    summary: 'edite index',
    description: 'edite index',
  })
  @Put('/:_id')
  // @Auth(Role.ALL)
  editeIndex(@Body() payload: EditeIndexDto, @Param() id: FindOneDto) {
    return this.indexService.updateIndex({...payload, ...id});
  }




//TODO 
//when url change it dosenot work properly
  @Get('/')
   getLatestPosts() {
    return this.indexService.getLatestPosts();
  }
  @Get('/latest')
   getLatestGems() {
    return this.indexService.getLatestGems();
  }


  


  

}
