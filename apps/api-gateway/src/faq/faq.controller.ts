import { Body, Controller, Delete, Get,  Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FaqService } from './faq.service';

import {  EditeFaqDto, FAQPageDto, FindFAQPageDto } from './dto/add_qa.dto';
import { FindOneDto } from '../blog/dto/find_one_blog.dto';
// import { EditeBlogDto } from './dto/edite_blog.dto';


@ApiTags('Faq')
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) { }
  // @ApiOperation({
  //   summary: 'Find all QA',
  //   description: 'Find all QA',
  // })
  // @Get('/qas')
  // // @Auth(Role.ADMIN , Role.SUPER_ADMIN)
  // findAllQa(@Query() payload: FindAllQaDto) {
  //   return this.faqService.findAllQA(payload);

  // }



  @ApiOperation({
    summary: 'Find FAQ',
    description: 'Find Faq',
  })
  @Get('/:_id')
  // @Auth(Role.ADMIN , Role.SUPER_ADMIN)
  findFaq(@Param() payload: FindOneDto) {
    console.log(payload);
    return this.faqService.findFaq(payload);
  }






  // @ApiOperation({
  //   summary: 'Find one qa',
  //   description: 'Find one qa',
  // })
  // @Get('/qa/:_id')
  // // @Auth(Role.ALL)
  // findOneQa(@Param() payload: FindOneDto) {
  //   return this.faqService.findOneQA(payload);
  // }



  // @ApiOperation({
  //   summary: 'add one QA',
  //   description: 'add one QA',
  // })
  // @Post('/qa')
  // // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  // addQA(@Body() payload: AddQADto) {
   
  //   return this.faqService.addQA(payload);
  // }


  @ApiOperation({
    summary: 'add one FAQ',
    description: 'add one FAQ',
  })
  @Post()
  // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  addFaq(@Body() payload: FAQPageDto) {
   
    return this.faqService.addFAQ(payload);
  }





  // @ApiOperation({
  //   summary: 'delete qa',
  //   description: 'delete qa ',
  // })

  // @Delete('/qas/:_id')
  // deleteQa( @Param() param: FindOneDto) {
  //   return this.faqService.deleteOneQa({
  //       ...param,
  //   });
  // }



  @ApiOperation({
    summary: 'edite faq',
    description: 'edite one blog',
  })
  @Put('/:_id')
  // @Auth(Role.ALL)
  editeFaq(@Body() payload: EditeFaqDto, @Param() id: FindOneDto) {
    return this.faqService.updateFaq({...payload, ...id});
  }





}
