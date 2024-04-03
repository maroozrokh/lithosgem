import {
  CanActivate,
  Injectable,
  ExecutionContext,
  RequestMethod,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const NotExist = this.reflector.get<string[]>(
      'NotExist',
      context.getHandler(),
    );
    const request = context.switchToHttp().getRequest();
    if (NotExist && !request?.headers?.authorization) {
      return true;
    }
    const activeRole = this.reflector.get<string[]>(
      ROLES_KEY,
      context.getHandler(),
    );
    const user = request.user?.user;
    console.log('Auth 28' , user);
    const find = activeRole.find((i) => `${i}` === `${user.role}`);
    console.log('Auth 30' , find);
    if (parseInt(find) >= 0) {
      return true;
    }
    return false;
  }
}
