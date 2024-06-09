 import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { BlogConfig } from '@res/common';
import { GalleryPattern } from './enum';
import { GalleryProxy } from './proxy.service';
 @Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: GalleryPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(BlogConfig());
      },
    },
    GalleryProxy,
  ],
  exports: [GalleryProxy],
})
export class GalleryProxyModule {}
