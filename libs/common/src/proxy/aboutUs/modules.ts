 import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AboutUsPattern } from './enum';
import { BlogConfig } from '@res/common';
import { AboutUsProxy } from './proxy.service';
 @Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: AboutUsPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(BlogConfig());
      },
    },
    AboutUsProxy,
  ],
  exports: [AboutUsProxy],
})
export class AboutProxyModule {}
