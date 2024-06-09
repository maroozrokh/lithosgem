import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { GemService } from './gem.service';
import { AddGemDto } from './dto/add_gem.dto';
import { EditeGemDto } from './dto/edite_gem.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllGemDto } from './dto/finad_all_gem.dto';
import { FindOneByNameDto, FindOneDto } from '../blog/dto/find_one_blog.dto';

@ApiTags('Gem')
@Controller('gem')
export class GemController {
  constructor(private readonly gemService: GemService) {}

  @ApiOperation({
    summary: 'Find all Gems',
    description: 'Find all Gems',
  })
  @Get('/gems')
  findAllGem(@Query() payload: FindAllGemDto){
    return this.gemService.findAllGem(payload)

  }


  @ApiOperation({
    summary: 'Find one gem',
    description: 'Find one gem',
  })
  @Get('/:_id')
  // @Auth(Role.ALL)
  findOne(@Param() payload: FindOneDto) {
    return this.gemService.findOneGem(payload);
  }

  
  @ApiOperation({
    summary: 'Find one gem by name',
    description: 'Find by name',
  })
  @Get('/gem/:title')
  async findBlogByName(@Query('title') title: FindOneByNameDto){
    return this.gemService.findOneGemByName(title);
  }





  @ApiOperation({
    summary: 'add one gem',
    description: 'add one gem',
  })
  @Post()
  // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  addGem(@Body() payload: AddGemDto) {
    return this.gemService.addGem(payload);
  }

  
  @ApiOperation({
    summary: 'delete one gem',
    description: 'delete one gem',
  })

  @Delete('/:_id')
  deleteOneGem( @Param() param: FindOneDto) {
    return this.gemService.deleteOneGem({
        ...param,
    });
  }



  @ApiOperation({
    summary: 'delete one boresh',
    description: 'delete one boresh',
  })

  @Delete('/boresh/:_id')
  deleteGemBoresh( @Param() param: FindOneDto) {
    return this.gemService.deleteBoreshGem({
        ...param,
    });
  }


  @Put('/:_id')
  // @Auth(Role.ALL)
  editeBLog(@Body() payload: EditeGemDto, @Param() id: FindOneDto) {
    return this.gemService.updateGem({...payload, ...id});
  }


}
