import { Admin } from './../../../../libs/schema/src/Admin/model';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { Auth } from '@res/common/decorators/auth';
import { Role } from '@libs/interface';
import { FindAllBlogDto } from './dto/finad_all_blog.dto';
import { FindOneDto, FindOneImageDto } from './dto/find_one_blog.dto';
import { AddBlogDto, VisualDto } from './dto/add_blog.dto';
import { EditeBlogDto, EditeImageDto } from './dto/edite_blog.dto';
// import { EditeBlogDto } from './dto/edite_blog.dto';


@ApiTags('Blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }
  @ApiOperation({
    summary: 'Find all blogs',
    description: 'Find all blogs',
  })
  @Get('/blogs')
  // @Auth(Role.ALL)
  findAllBlog(@Query() payload: FindAllBlogDto) {
    return this.blogService.findAllBlog(payload);
  }



  @ApiOperation({
    summary: 'Find one blog',
    description: 'Find one blog',
  })
  @Get('/:_id')
  // @Auth(Role.ALL)
  findOne(@Param() payload: FindOneDto) {
    return this.blogService.findOneBlog(payload);
  }



  @ApiOperation({
    summary: 'add one blog',
    description: 'add one blog',
  })
  @Post()
  // @Auth(Role.ADMIN,Role.SUPER_ADMIN)
  addBlog(@Body() payload: AddBlogDto) {
   
    return this.blogService.addBlog(payload);
  }





  @ApiOperation({
    summary: 'delete one blog',
    description: 'delete one blog',
  })

  @Delete('/:_id')
  deleteOneBlog( @Param() param: FindOneDto) {
    return this.blogService.deleteOneBlog({
        ...param,
    });
  }



  @ApiOperation({
    summary: 'edite one blog',
    description: 'edite one blog',
  })
  @Put('/:_id')
  // @Auth(Role.ALL)
  editeBLog(@Body() payload: EditeBlogDto, @Param() id: FindOneDto) {
    return this.blogService.updateBlog({...payload, ...id});
  }

  @Put('/:_id/:_imageId')
  // @Auth(Role.ALL)
  editeImage(@Body() payload: VisualDto, @Param() id: FindOneImageDto) {
    return this.blogService.editeImage({...payload, ...id});
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
