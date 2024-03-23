import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminProxyModule, MongoConfigAsync, setupEnv } from '@res/common';
import { AdminModule } from 'apps/api-gateway/src/admin/admin.module';

@Module({
  imports: [
  setupEnv(),
  MongooseModule.forRootAsync(MongoConfigAsync),
  AdminModule,
  AdminProxyModule,
  AdminMicroModule

],

})
export class AdminMicroModule {}
