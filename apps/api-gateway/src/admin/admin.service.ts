import { IFindAllAdmin, IUpdateAdmin, IUpdateAdminProfile } from '@libs/interface';

import { IAdmin, IBlog,  IEditeBlog, IFindAllBlog, IFindOneId } from '@libs/interface';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AdminProxy } from '@res/common';
import { log } from 'console';
 
@Injectable()
export class AdminService {
  constructor(private readonly adminProxy: AdminProxy) {}
  addAdmin(payload: IAdmin) {
    return this.adminProxy.addAdmin(payload);
  }

  findAllAdmin(payload: IFindAllAdmin) {
    return this.adminProxy.findAll(payload);
  }
  findOneAdmin(payload: IFindOneId) {
    return this.adminProxy.findOne(payload);
  }

  deleteOneAdmin(payload:IFindOneId) {
    return this.adminProxy.deleteAdmin(payload);
  }

  updateAdmin(payload: IUpdateAdmin) {
    return this.adminProxy.updateAdmin(payload);
  }


  updateAdminImage(payload: IUpdateAdminProfile) {
    return this.adminProxy.updateAdminImage(payload);
  }

  async login(email: string, password: string) {
    const admin = await this.adminProxy.login(email, password);
    if (admin?.error) {
      throw new BadRequestException(admin);
      
    }
    console.log('cjsd');
    return admin;
  }

  superAdmin(payload: IAdmin) {  
    return this.adminProxy.superAdminInit();
  }

}
