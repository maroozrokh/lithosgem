import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { BaseCache } from './cache.abstract';

@Injectable()
export class AuthCache extends BaseCache<Cache> {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    super(cacheManager, 'auth', 36000); //10d
  }
}
