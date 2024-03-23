import { EmailMicroConfig } from '@libs/common';
import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { EmailPattern } from './enum';
import { EmailClientProxy } from './proxy.service';
@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: EmailPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(EmailMicroConfig());
      },
    },
    EmailClientProxy,
  ],
  exports: [EmailClientProxy],
})
export class EmailProxyModule {}
