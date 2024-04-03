import { Controller, Get } from '@nestjs/common';
import { AdminMicroService } from './admin-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AboutUsPattern, AdminPattern } from '@res/common';
import { IAdmin, IFindAllAdmin, IFindOneId, ILoginAdmin, IUpdateAdmin, IUpdateAdminProfile } from '@libs/interface';

@Controller()
export class AdminMicroController {
  constructor(private readonly adminMicroService: AdminMicroService) {}


  @MessagePattern(AdminPattern.ADD_ADMIN)
  addAdmin(@Payload() payload: IAdmin) {
    return this.adminMicroService.addAdmin(payload);
  }



  @MessagePattern(AdminPattern.FIND_ALL_ADMIN)
  finadAllAdmin(@Payload() payload: IFindAllAdmin) {
    return this.adminMicroService.findAllAdmin(payload);
  }



  @MessagePattern(AdminPattern.UPDATE_ADMIN)
  updateAdmin(@Payload() payload: IUpdateAdmin) {
    return this.adminMicroService.updateAdmin(payload);
  }


  @MessagePattern(AdminPattern.UPDATE_ADMIN_IMG)
  updateAdminImage(@Payload() payload: IUpdateAdminProfile) {
    return this.adminMicroService.updateAdminImage(payload);
  }


  
  @MessagePattern(AdminPattern.DELETE_ADMIN)
  deletAdmin(@Payload() payload: IFindOneId) {
    return this.adminMicroService.deleteOneadmin(payload);
  }

  @MessagePattern(AdminPattern.FIND_ONE_ADMIN)
  finrOneAdmin(@Payload() payload: IFindOneId) {
    return this.adminMicroService.findOneAdmin(payload);
  }

  @MessagePattern(AdminPattern.LOGIN)
  logIn(@Payload() payload: ILoginAdmin) {
    return this.adminMicroService.login(payload.email,payload.password);
  }

  @MessagePattern(AdminPattern.CREATE_SUPER_ADMIN)
  superAdminInit(@Payload() payload:any) {
    console.log('Test micro')
    return this.adminMicroService.superAdminInit();
  }

}
