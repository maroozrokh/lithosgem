 import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { BlogPattern } from './enum';
import { BlogProxy } from './proxy.service';
import { BlogConfig } from '@res/common';
 @Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: BlogPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(BlogConfig());
      },
    },
    BlogProxy,
  ],
  exports: [BlogProxy],
})
export class BlogProxyModule {}
