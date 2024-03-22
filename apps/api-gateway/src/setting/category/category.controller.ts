import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {  CatService } from './category.service';
import {  AddCatDto, EditeCatDto, FindAllCatDto, FindOneSettingDto } from './dto/category.dto';
import { FindOneDto } from '../../blog/dto/find_one_blog.dto';


@ApiTags('Category')
@Controller('Category')
export class CatController {
  constructor(private readonly catServise: CatService) { }
  @ApiOperation({
    summary: 'Find all category',
    description: 'Find all category',
  })
  @Get('/category')
  // @Auth(Role.ALL)
  findAllCat(@Query() payload: FindAllCatDto) {
    return this.catServise.findAllCat(payload);
  }



  @ApiOperation({
    summary: 'Find one category',
    description: 'Find one category',
  })
  @Get('/:_id')
  // @Auth(Role.ALL)
  findOneCat(@Param() payload: FindOneDto) {
    return this.catServise.findOneCat(payload);
  }



  @ApiOperation({
    summary: 'add one category',
    description: 'add one category',
  })
  @Post()
  // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  addCat(@Body() payload: AddCatDto) {
   
    return this.catServise.addCat(payload);
  }





  @ApiOperation({
    summary: 'delete one category',
    description: 'delete one category',
  })

  @Delete('/:_id')
  deleteOneCat( @Param() param: FindOneDto) {
    return this.catServise.deleteOneCat({
        ...param,
    });
  }



  @ApiOperation({
    summary: 'edite one category',
    description: 'edite one category',
  })
  @Put('/:_id')
  // @Auth(Role.ALL)
  editeCat(@Body() payload: EditeCatDto, @Param() _id: FindOneDto) {
    return this.catServise.editeCat({...payload, ..._id});
  }





  
  // @ApiOperation({
  //   summary: 'add one image',
  //   description: 'add one image',
  // })
  // @Post('/images')
  // // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  // addImage(@Body() payload: VisualDto) {
   
  //   return this.blogService.addImage(payload);
  // }


  // @ApiOperation({
  //   summary: 'Find one client',
  //   description: 'Find one client by clients id',
  // })
  // @Auth(Role.ADMIN, Role.SUPER_ADMIN, Role.ADMIN_PARTNER)
  // @Get('/:_id')
  // findOne(@Param() condition: FindOneClientDto) {
  //   return this.clientService.findOne(condition);
  // }

  // @ApiOperation({
  //   summary: 'Client sign up',
  //   description: 'Singing up new client',
  // })
  // @Post()
  // signUp(@Body() payload: CreateClientDto) {
  //   return this.clientService.signup(payload);
  // }

  // @ApiOperation({
  //   summary: 'Clients log in',
  //   description: 'Log in clients by entering email and password',
  // })
  // @Post('/login')
  // login(@Body() loginMasterDto: LoginMasterDto) {
  //   return this.clientService.login(
  //     loginMasterDto.email,
  //     loginMasterDto.password,
  //   );
  // }

  // @ApiOperation({
  //   summary: 'Forget password by clients',
  //   description: 'Forget password by client to recive reminder password email',
  // })
  // @Post('/forget/password')
  // forgetPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
  //   return this.clientService.forgetPassword(forgetPasswordDto);
  // }

  // @ApiOperation({
  //   summary: 'Change password by clients',
  //   description: 'Change password by client with tiken',
  // })
  // @Put('/change/password')
  // changePassword(@Body() changePasswordDto: ChangePasswordDto) {
  //   return this.clientService.changePassword(changePasswordDto);
  // }

  // @ApiOperation({
  //   summary: 'update my profile',
  //   description: 'update my profile with jwt token',
  // })
  // @Auth(Role.CLIENT)
  // @Put('/profile')
  // updateProfile(
  //   @AuthParam() user: any,
  //   @Body() payload: ClientUpdateProfileDto,
  // ) {
  //   return this.clientService.updateProfile({ ...payload, _id: user?._id });
  // }

  // @Post('/verify')
  // verifyClient(@Body() payload: VerifyClientDto) {
  //   return this.clientService.verifyClient(payload);
  // }



}
