 import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { IndexPattern } from './enum';
import { IndexProxy } from './proxy.service';
import { BlogConfig } from '@res/common/config';
 @Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: IndexPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(BlogConfig());
      },
    },
    IndexProxy,
  ],
  exports: [IndexProxy],
})
export class IndexProxyModule {}
// function BlogConfig(): { transport: import("@nestjs/microservices").Transport.GRPC; } & import("@nestjs/microservices").GrpcOptions {
//   throw new Error('Function not implemented.');
// }

