import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AdminPattern } from './enum';
import { AdminClientProxy } from './proxy-service';
import { AdminMicroConfig } from '@res/common';
@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: AdminPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(AdminMicroConfig());
      },
    },
    AdminClientProxy,
  ],
  exports: [AdminClientProxy],
})
export class AdminProxyModule {}
