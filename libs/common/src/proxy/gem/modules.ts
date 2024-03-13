 import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { BlogConfig } from '@res/common';
import { GemPattern } from './enum';
import { GemProxy } from './proxy.service';
 @Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: GemPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(BlogConfig());
      },
    },
    GemProxy,
  ],
  exports: [    GemProxy],
})
export class GemProxyModule {}
