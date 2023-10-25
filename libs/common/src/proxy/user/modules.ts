import { UserMicroConfig } from '../../config/micro/user-config';
import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { UserPattern } from './enum';
import { UserProxy } from './proxy-service';
@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: UserPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(UserMicroConfig());
      },
    },
    UserProxy,
  ],
  exports: [UserProxy],
})
export class ClientProxyModule {}
