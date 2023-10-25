import {
    ExecutionContext,
    createParamDecorator,
    NotFoundException,
  } from '@nestjs/common';
  export const IpParam = createParamDecorator<unknown, ExecutionContext>(
    async (data: string, ctx: ExecutionContext) => {
      try {
        const req = ctx.switchToHttp().getRequest<any>();
        const ip = req.ip;
        if (!ip) {
          throw new NotFoundException();
        }
        return ip;
      } catch (error) {
        throw new NotFoundException();
      }
    },
  );
  