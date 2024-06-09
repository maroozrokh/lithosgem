 import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { BlogConfig } from '@res/common';
import { FaqPattern } from './enum';
import { FaqProxy } from './proxy.service';
 @Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: FaqPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(BlogConfig());
      },
    },
    FaqProxy,
  ],
  exports: [FaqProxy],
})
export class FAQProxyModule {}
