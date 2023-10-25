import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserPattern } from './enum';
import { AProxy } from '../base/proxy-service';
// import {
//   IAddAccountWithAdmin,
//   IAddClientAccount,
//   IChangePasswordClient,
//   IClientUpdateProfile,
//   IDeleteAccountWithAdmin,
//   IDeleteClientAccount,
//   IEditAccountWithAdmin,
//   IFindAllClient,
//   IFindAllClientAccount,
//   IFindOneClient,
//   IForgetPasswordClient,
//   ILoginClient,
//   ISignupClient,
//   IUpdateClientAccount,
//   IVerifyClient,
// } from '@libs/interface';

@Injectable()
export class UserProxy extends AProxy<ClientProxy> {
  findOneById(_id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(@Inject(UserPattern.NAME) client: ClientProxy) {
    super(client);
  }
  // findAll(payload: IFindAllClient) {
  //   return this.send(ClientPattern.FIND_ALL_CLIENT, payload);
  // }
  // findOne(payload: IFindOneClient) {
  //   return this.send(ClientPattern.FIND_ONE_CLIENT, payload);
  // }
  // login(payload: ILoginClient) {
  //   return this.send(ClientPattern.LOGIN, payload);
  // }
  // signup(payload: ISignupClient) {
  //   return this.send(ClientPattern.SIGNUP, payload);
  // }
  // getProfile(payload: IFindOneClient) {
  //   return this.send(ClientPattern.PROFILE, payload);
  // }

  // updateProfile(payload: IClientUpdateProfile) {
  //   return this.send(ClientPattern.UPDATE_PROFILE, payload);
  // }

  // forgetPassword(payload: IForgetPasswordClient) {
  //   return this.send(ClientPattern.FORGET_PASSWORD, payload);
  // }

  // changePassword(payload: IChangePasswordClient) {
  //   return this.send(ClientPattern.CHANGE_PASSWORD, payload);
  // }

  // verify(payload: IVerifyClient) {
  //   return this.send(ClientPattern.VERIFY_CLIENT, payload);
  // }

  // findAllClientAccount(payload: IFindAllClientAccount) {
  //   return this.send(ClientPattern.FIND_ALL_CLIENT_ACCOUNT, payload);
  // }
  // updateClientAccount(payload: IUpdateClientAccount) {
  //   return this.send(ClientPattern.UPDATE_CLIENT_ACCOUNT, payload);
  // }

  // addClientAccount(payload: IAddClientAccount) {
  //   return this.send(ClientPattern.ADD_CLIENT_ACCOUNT, payload);
  // }

  // deleteClientAccount(payload: IDeleteClientAccount) {
  //   return this.send(ClientPattern.DELETE_CLIENT_ACCOUNT, payload);
  // }

  // addAdminAccount(payload: IAddAccountWithAdmin) {
  //   return this.send(ClientPattern.ADD_ADMIN_ACCOUNT, payload);
  // }
  // deleteAdminAccount(payload: IDeleteAccountWithAdmin) {
  //   return this.send(ClientPattern.DELETE_ADMIN_ACCOUNT, payload);
  // }
  // updateAdminAccount(payload: IEditAccountWithAdmin) {
  //   return this.send(ClientPattern.UPDATE_ADMIN_ACCOUNT, payload);
  // }

 
}
