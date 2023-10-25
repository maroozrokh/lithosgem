import { HttpException } from '@nestjs/common';
/**
 * Invalid Refresh Exception
 * @extends HttpException
 */
export class InvalidRefreshException extends HttpException {
  constructor() {
    super(
      {
        status_code: 403,
        message: 'Invalid token',
      },
      403,
    );
  }
}
