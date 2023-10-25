import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AdminPattern } from './enum';
import { AProxy } from '../base/proxy-service';
// import {
//   IAddAccountAdmin,
//   IAddAdminPlan,
//   IAdminUpdateProfile,
//   IChangePasswordAdmin,
//   IDeleteAdminPlan,
//   IEditeAdminPlan,
//   IFindAllAdmin,
//   IFindOneAdmin,
//   IFindOneId,
//   IForgetPasswordAdmin,
//   IGetListAdminWithAdminPlan,
// } from '@libs/interface';

@Injectable()
export class AdminClientProxy extends AProxy<ClientProxy> {
  constructor(@Inject(AdminPattern.NAME) client: ClientProxy) {
    super(client);
  }
  getHello() {
    return this.send(AdminPattern.NAME, {});
  }
//   findAll(payload: IFindAllAdmin) {
//     return this.send(AdminPattern.FIND_ALL_ADMIN, payload);
//   }
//   findOne(payload: IFindOneAdmin) {
//     return this.send(AdminPattern.FIND_ONE_ADMIN, payload);
//   }
//   addAccount(payload: IAddAccountAdmin) {
//     return this.send(AdminPattern.ADD_ACCOUNT, payload);
//   }

//   login(email: string, password: string) {
//     return this.send(AdminPattern.LOGIN, { email, password });
//   }

//   getProfile(payload: IFindOneAdmin) {
//     return this.send(AdminPattern.PROFILE, payload);
//   }
//   updateProfile(payload: IAdminUpdateProfile) {
//     return this.send(AdminPattern.UPDATE_PROFILE, payload);
//   }
//   forgetPassword(payload: IForgetPasswordAdmin) {
//     return this.send(AdminPattern.FORGET_PASSWORD, payload);
//   }
//   changePassword(payload: IChangePasswordAdmin) {
//     return this.send(AdminPattern.CHANGE_PASSWORD, payload);
//   }

//   createAdminPlan(payload: IAddAdminPlan) {
//     return this.send(AdminPattern.ADD_ADMIN_PLAN, payload);
//   }
//   editAdminPlan(payload: IEditeAdminPlan) {
//     return this.send(AdminPattern.EDIT_ADMIN_PLAN, payload);
//   }
//   adminListPlan(payload: any) {
//     return this.send(AdminPattern.LIST_ADMIN_PLAN, payload);
//   }

//   findOneAmdinPlan(payload: IFindOneId) {
//     return this.send(AdminPattern.FIND_ONE_ADMIN_PLAN, payload);
//   }

//   deleteAdminPlan(payload: IDeleteAdminPlan) {
//     return this.send(AdminPattern.DELETE_ADMIN_PLAN, payload);
//   }

//   getListAdminPlaneByClient(payload: IGetListAdminWithAdminPlan) {
//     return this.send(AdminPattern.CLINT_GET_LIST_ADMIN_PLAN, payload);
//   }

//   superAdminInit() {
//     return this.send(AdminPattern.CREATE_SUPER_ADMIN, {});
//   }
}
