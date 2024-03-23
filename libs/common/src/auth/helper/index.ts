import { Injectable } from '@nestjs/common/decorators';
import { InvalidRefreshException } from '../../';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interface';
import * as bcrypt from 'bcrypt';
import { AuthCache } from '@res/common/cache/auth.cache';
import { uuid } from '@res/common/helpers';
@Injectable()
/**
 * @name Auth Helper Service
 * @class AuthHelperService
 */
export class AuthHelperService {
  constructor(private authCache: AuthCache, private jwtService: JwtService) {}

  /**
   * Get Token
   * @param user User
   * @param ip Request
   * @returns Token JWT
   */
  async getToken(data: any) {
    const appId = uuid();
    const ttl = 60 * 60 * 24 * 10; //10d
    const payload: JwtPayload = {
      appId,
      user: data,
    };
    //TODO check uniq appId @sajadweb
    await this.authCache.set(payload.appId, payload, ttl);
    return {
      token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign({
        appId,
        expiresIn: Date.now() + ttl * 1000,
      }),
    };
  }
  /**
   *  Get Link
   * @param data
   * @returns
   */
  async getLink(data: any) {
    const appId = uuid();
    const payload: JwtPayload = {
      appId,
      link: data,
    };
    return this.jwtService.sign(payload);
  }
  /**
   *  Decode Link
   * @param token
   * @returns
   */
  async decodeLink(token: string) {
    try {
      const jwtToken: any = this.jwtService.decode(token);
      if (!jwtToken || !jwtToken?.appId) {
        return null;
      }
      return jwtToken?.link;
    } catch (error) {
      return null;
    }
  }
  /**
   * Revoke Token
   * @param payload: JwtPayload
   * @returns boolean
   */
  async revokeToken(payload: JwtPayload) {
    try {
      if (!(await this.authCache.get(payload?.appId))) {
        return true;
      }
      return !!(await this.authCache.del(payload?.appId));
    } catch (error) {
      return false;
    }
  }
  /**
   * Verify Token use in socket
   * @param token
   * @returns null | Payload
   */
  async verifyToken(token: string) {
    try {
      const jwtToken: any = this.jwtService.decode(token);
      if (!jwtToken || !jwtToken?.appId) {
        return null;
      }
      const payload = await this.authCache.get(jwtToken.appId);
      // console.log('verifyToken payload', payload);
      if (!payload) {
        return null;
      }
      return jwtToken;
    } catch (error) {
      return null;
    }
  }
  /**
   * Refresh Token
   * @param refresh string
   * @param token string
   * @returns Token JWT
   */
  async refreshToken(refresh: string, token: string) {
    try {
      const { appId, expiresIn }: any = this.jwtService.decode(refresh);
      const now = parseInt(new Date().getTime() / 1000 + '');
      if (expiresIn < now) {
        throw new InvalidRefreshException();
      }
      const jwtToken: any = await this.jwtService.decode(token);
      if (jwtToken.appId != appId) {
        throw new InvalidRefreshException();
      }
      const payload = await this.authCache.get(appId);
      if (!payload) {
        throw new InvalidRefreshException();
      }
      await this.revokeToken(payload);
      return await this.getToken(jwtToken);
    } catch (error) {
      throw new InvalidRefreshException();
    }
  }
  /**
   * hash password
   * @param data string
   * @returns Hash
   */
  hashPass(data: string): Promise<string> {
    return bcrypt.hash(data, Number(process.env.HASH_SALT));
  }
  /**
   * Check Password
   * @param password string
   * @param hash string
   * @returns boolean
   */
  async checkPass(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
