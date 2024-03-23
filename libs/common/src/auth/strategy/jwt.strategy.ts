import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { UnAuthenticationException } from '../../exceptions';
import { AuthCache } from '@res/common/cache/auth.cache';

/**
 * @class JwtStrategy
 * @description Jwt Strategy Passport
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * JwtPayload
   * @param configService ConfigService
   */
  constructor(private authCache: AuthCache, configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  /**
   * Validate
   * @param payload any
   * @returns Payload
   */
  async validate(payload: any) {
    const cache = await this.authCache.get(payload.appId);
    if (!cache) {
      throw new UnAuthenticationException();
    }
    return payload;
  }
}
