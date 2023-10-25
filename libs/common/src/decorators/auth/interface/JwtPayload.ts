/**
 * @interface JwtPayload
 * @description Jwt Payload
 */
export interface JwtPayload {
  /**
   * appId
   */
  appId: string;
  /**
   * iat
   */
  iat?: number;
  /**
   * exp
   */
  exp?: number;
  /**
   * jti
   */
  jti?: string;
  /**
   * key string
   */
  [key: string]: any;
}
