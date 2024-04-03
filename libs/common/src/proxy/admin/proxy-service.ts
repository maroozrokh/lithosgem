import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AdminPattern } from './enum';
import { AProxy } from '../base/proxy-service';
import { IAddAdmin, IAdmin, IFindAllAdmin, IFindOneAdmin, IFindOneId, IUpdateAdmin, IUpdateAdminProfile } from '@libs/interface';


@Injectable()
export class AdminProxy extends AProxy<AdminProxy> {
  constructor(@Inject(AdminPattern.NAME) admin: AdminProxy) {
    super(admin);
  }
  healthCheck(){
    return this.pingCheck();
  }

  findAll(payload: IFindAllAdmin) {
    return this.send(AdminPattern.FIND_ALL_ADMIN, payload);
  }
  findOne(payload: IFindOneAdmin) {
    return this.send(AdminPattern.FIND_ONE_ADMIN, payload);
  }
  addAdmin(payload: IAdmin) {
       return this.send(AdminPattern.ADD_ADMIN, payload);
  }

  login(email: string, password: string) {
    return this.send(AdminPattern.LOGIN, {email, password}  );
  }

  getProfile(payload: IFindOneAdmin) {
    return this.send(AdminPattern.PROFILE, payload);
  }

  deleteAdmin(payload: IFindOneId) {
    return this.send(AdminPattern.DELETE_ADMIN, payload);
  }

  updateAdmin(payload: IUpdateAdmin) {
    return this.send(AdminPattern.UPDATE_ADMIN, payload);
  }

  updateAdminImage(payload: IUpdateAdminProfile) {
    return this.send(AdminPattern.UPDATE_ADMIN_IMG, payload);
  }
  // forgetPassword(payload: IForgetPasswordAdmin) {
  //   return this.send(AdminPattern.FORGET_PASSWORD, payload);
  // }
  // changePassword(payload: IChangePasswordAdmin) {
  //   return this.send(AdminPattern.CHANGE_PASSWORD, payload);
  // }

  superAdminInit() {
    console.log('test');
    return this.send(AdminPattern.CREATE_SUPER_ADMIN, {});
  }
}
