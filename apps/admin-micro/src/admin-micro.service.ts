import { Admin } from './../../../libs/schema/src/Admin/model';
import { IAddAdmin, IAdmin, IFindAllAdmin, IFindOneId, IUpdateAdmin, Role } from '@libs/interface';
import { AdminRepository, str2objectId } from '@libs/schema';
import { Injectable } from '@nestjs/common';
import { AuthHelperService } from '@res/common/auth';
import { EmailClientProxy } from '@res/common/email';
import { BAD_REQUEST, OK } from '@res/common/helpers';

@Injectable()
export class AdminMicroService {
  constructor(
    private readonly adminRepo: AdminRepository,
    private readonly auth: AuthHelperService,
    private readonly emailProxy: EmailClientProxy,

    ) { }

   async addAdmin(payload: IAdmin) {
    const checkDouplicateAdmin = await this.adminRepo.existsByCondition({
      email: payload.email,
    });
    if (checkDouplicateAdmin) {
      return BAD_REQUEST('Opps! douplicate email exsist');
    }
    const admin = await this.adminRepo.create({ ...payload });
    if (payload.role == Role.SUPER_ADMIN) {
      if (!payload.email || !payload.password) {
        return BAD_REQUEST('Opps! you have to enter email and password');
      }
     }
    //  this.emailProxy.sendAccountInfo({
    //   name: payload?.name,
    //   to: payload?.email,
    //   password: payload?.password,
    //   link: '', 
    // });
    return OK({ _id: admin?._id });
  }


  async superAdminInit() {
    const name =
      process.env.ADMIN_NAME || process.env.ADMIN_USER_NAME.split('@')[0];
    const email = process.env.ADMIN_USER_NAME;
    const pass = process.env.ADMIN_PASSWORD;
    const password = await this.auth.hashPass(pass);
    const admin = await this.adminRepo.existsByCondition({ email });
    if (admin) {
      return BAD_REQUEST(admin);
    }
    const superAdmin = await this.adminRepo.create({
      name,
      email,
      password,
      role: Role.SUPER_ADMIN,
    });
    if (!superAdmin) {
      return BAD_REQUEST('Opps! super admin not create');
    }
    return OK({ superAdmin });
  }



   async findAllAdmin(payload: IFindAllAdmin) {

    const $match = {};

    if (payload.query) {
      $match['name'] = new RegExp(payload.query, 'ig');
    }
    if (!payload.admin) {
      $match['admin'] = str2objectId(payload.admin?._id || payload?.admin);
    }
// return $match;
    const data = await this.adminRepo.pagination(
      [{ $match }],
      payload.page,
      payload.count,
      $match,
    );
    return OK(data, true);

  }

  async findOneAdmin(payload: IFindOneId) {

    const admin = await this.adminRepo.findOneById(payload._id);
    if (!admin) {
      return BAD_REQUEST('Opps! not found admin');
    }
    return OK(admin);

  }

  async deleteOneadmin(payload: IFindOneId) {
    const admin = await this.adminRepo.findOneById({
      _id: str2objectId(payload._id),
    });
    if (!admin) {
      return BAD_REQUEST('Opps! not found admin');
    }
    const deletAdmin = await this.adminRepo.deleteOne({
      _id: payload._id,
    });

    return OK(!!deletAdmin?.deletedCount);
  }



  async login(email: any, password: string) {
    let admin = await this.adminRepo
      .findOneByCondition({ email })
      .select({ trade: 0 })
      .exec();
    if (!admin) {
      return BAD_REQUEST('Opps! email not found');
    }
    admin = admin.toObject();

    if (!(await this.auth.checkPass(password, admin?.password))) {
      console.log(password);
      console.log(admin?.password);
      console.log(await this.auth.checkPass(password, admin?.password));
      return BAD_REQUEST('Opps!email and password not valid');
    }
    delete admin.password;
    const token = await this.auth.getToken(admin);
    return OK({ admin, ...token });
    // return OK({ admin });
  }



  async updateAdmin(payload: IUpdateAdmin) {
    let admin = await this.adminRepo
      .findOneById(str2objectId(payload?._id));
    if (!admin) {
      return BAD_REQUEST('Opps! admin not found');
    }
    if (payload?.name) {
      admin.name = payload?.name;
    }
    if (payload?.password) {
      admin.password = await this.auth.hashPass(payload.password);
    }

    if (payload?.role) {
      admin.role = payload?.role;
    }
    // if ('profile' in payload) {
    //   const profile = admin?.profile || { image: '', description: '' };
    //   if (payload.profile?.image) {
    //     profile.image = payload.profile?.image;
    //   }
    //   if (payload.profile?.description) {
    //     profile.description = payload.profile?.description;
    //   }
    //   admin.profile = profile;
    // }
    await admin.save();
    admin = admin.toObject();
    delete admin?.password;
    return OK({ admin });
  }
}
