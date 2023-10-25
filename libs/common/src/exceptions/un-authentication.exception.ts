import { HttpException } from '@nestjs/common';
/**
 * UnAuthentication Exception
 * @extends HttpException
 */
export class UnAuthenticationException extends HttpException {
  constructor() {
    super(
      {
        status_code: 401,
        message: 'You are not logged in',
      },
      401,
    );
  }
}
