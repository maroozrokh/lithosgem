export abstract class BaseCache<T> {
    private cache: any;
    private path: string;
    private ttl: number; //H:i:300
    protected constructor(cacheManager: T, path: string, ttl: number) {
      this.cache = cacheManager;
      this.path = path;
      this.ttl = ttl;
    }
    private getKey(key: string): string {
      return `${this.path}:${key}`;
    }
    async set(key: string, data: any, ttl?: number): Promise<any> {
      try {
        return await this.cache.set(this.getKey(key), data, {
          ttl: ttl || this.ttl,
        } as any);
      } catch (error) {
        return error?.message;
      }
    }
    get(key: string): Promise<any> {
      return this.cache.get(this.getKey(key));
    }
    async del(key: string) {
      try {
        await this.cache.del(this.getKey(key));
        return true;
      } catch (error) {
        return false;
      }
    }
  }
  