 import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import {  SettingPattern } from './enum';
import {  SettingProxy } from './proxy.service';
import { BlogConfig } from '@res/common';
 @Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: SettingPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(BlogConfig());
      },
    },
    SettingProxy,
  ],
  exports: [SettingProxy],
})
export class SettingProxyModule {}
