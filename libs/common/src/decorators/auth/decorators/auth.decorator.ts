import {
  applyDecorators,
  ExecutionContext,
  createParamDecorator,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthorizationGuard } from '../guard/authorization.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { Role } from '@libs/interface';
import { Roles } from './roles.decorator';

/**
 * Auth Decorators with Swagger BearerAuth
 * @returns <TFunction extends Function, Y>
 */
export function Auth(...roles: Role[]) {
  return applyDecorators(
    Roles(...roles),
    UseGuards(JwtAuthGuard, AuthorizationGuard),
    ApiBearerAuth(),
  );
}

/**
 * Auth Decorator
 * @returns <TFunction extends Function, Y>
 */
export const AuthParam = createParamDecorator<unknown, ExecutionContext>(
  async (data: string, ctx: ExecutionContext) => {
    try {
      const param = data || 'user';
      const req = ctx.switchToHttp().getRequest<any>();
      const user: any = req.user[param];
      console.log('decor',user);
      if (!user) {
        throw new NotFoundException();
      }
      return user;
    } catch (error) {
      throw new NotFoundException();
    }
  },
);
export const AuthParamOptional = createParamDecorator<
  unknown,
  ExecutionContext
>(async (data: string, ctx: ExecutionContext) => {
  try {
    const param = data || 'user';
    const req = ctx.switchToHttp().getRequest<any>();
    const user: any = req.user[param];
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw new NotFoundException();
  }
});
