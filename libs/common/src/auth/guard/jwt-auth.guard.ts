import { UnAuthenticationException } from '../../exceptions';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

/**
 * Jwt Guard
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  /**
   * Check Active Token
   * @param context ExecutionContext
   * @returns JwtAuthGuard
   */
  canActivate(context: ExecutionContext) {
    const NotExist = this.reflector.get<any>('NotExist', context.getHandler());
    const request = context.switchToHttp().getRequest<any>();
    if (NotExist && !request?.headers?.authorization) {
      return true;
    }
    return super.canActivate(context);
  }

  /**
   * Handle Request
   * @param err any
   * @param user any
   * @param info any
   * @returns User
   */
  handleRequest(err, user, info) {
    if (err || !user) {
      throw new UnAuthenticationException();
    }
    return user;
  }
}
