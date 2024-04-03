import { Admin } from './../../../../libs/schema/src/Admin/model';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from '@res/common/decorators/auth';
import { Role } from '@libs/interface';
import { AdminService } from './admin.service';
import { LoginDto } from './dto/log_in.dto';
import { AuthParam } from '@res/common/auth';
import { EditeAdminDto, EditeAdminImageDto } from './dto/edite_admin.dto';
import { FindAllAdminDto } from './dto/find_all_admin.dto';
import { AdminDto } from './dto/add_admin.dto';
import { FindOneDto } from '../blog/dto/find_one_blog.dto';


@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }
  @ApiOperation({
    summary: 'Find all admin',
    description: 'Find all admin',
  })
  @Get('/admins')
  @Auth(Role.SUPER_ADMIN)
  findAllAdmin(@Query() payload: FindAllAdminDto) {
    return this.adminService.findAllAdmin(payload);
  }




  @ApiOperation({
    summary: 'add one Admin',
    description: 'add one Admin',
  })
  @Post()
  @Auth(Role.SUPER_ADMIN)
  addAdmin(@Body() payload: AdminDto) {
   
    return this.adminService.addAdmin(payload);
  }





  @ApiOperation({
    summary: 'delete one Admin',
    description: 'delete one Admin',
  })

  @Delete('/:_id')
  @Auth(Role.SUPER_ADMIN)
  deleteOneAdmin(@Param() param: FindOneDto) {
    return this.adminService.deleteOneAdmin({
        ...param,
    });
  }


  @ApiOperation({
    summary: 'Find one admin',
    description: 'Find one admin',
  })
  @Auth(Role.SUPER_ADMIN)
  @Get('/:_id')
  findOneAdmin(@Param() condition: FindOneDto) {
    return this.adminService.findOneAdmin(condition);
  }


  @ApiOperation({
    summary: 'admin log in',
    description: 'Log in admin by entering email and password',
  })

  @Post('/login')
  login(@Body() adminDto: LoginDto) {
    return this.adminService.login(
      adminDto.email,
      adminDto.password,
    );
  }


  @ApiOperation({
    summary: 'update admin',
    description: 'update admin',
  })
  @Auth(Role.SUPER_ADMIN)
  @Put('/profile')
  updateAdmin(
    @AuthParam() admin: any,
    @Body() payload: EditeAdminDto,
  ) {
    return this.adminService.updateAdmin({ ...payload, _id: admin?._id });
  }


  @ApiOperation({
    summary: 'update admin',
    description: 'update admin',
  })
  @Auth(Role.SUPER_ADMIN, Role.ADMIN, Role.WRITER)
  @Put('/profileimg')
  updateProfileImage(
    @AuthParam() admin: any,
    @Body() payload: EditeAdminImageDto,
  ) {
    return this.adminService.updateAdmin({ ...payload, _id: admin?._id });
  }



  @ApiOperation({
    summary: 'add super admin',
    description: 'add super admin',
  })
  @Post('/superadmin')
  // @Auth(Role.SUPER_ADMIN)
  superAdmin(@Body() payload: AdminDto) {   
    console.log(payload);
    return this.adminService.superAdmin(payload);
  }


  @Get('/getpro/user')
  @Auth(Role.SUPER_ADMIN)
  getProfile(@AuthParam() user:any){
    return user;

  }


}
