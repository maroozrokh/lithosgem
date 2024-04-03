import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminProxyModule, MongoConfigAsync, setupEnv } from '@res/common';
import { AuthModule } from '@res/common/auth';
import { AdminMicroController } from './admin-micro.controller';
import { AdminMicroService } from './admin-micro.service';
import { AdminFeature, AdminRepository } from '@libs/schema';

@Module({
  imports: [
  setupEnv(),
  MongooseModule.forRootAsync(MongoConfigAsync),
  MongooseModule.forFeature([AdminFeature]),
  AdminProxyModule,
  AuthModule,
  AdminMicroModule,  
  // EmailProxyModule,


],
controllers: [AdminMicroController],
providers:[AdminMicroService, AdminRepository]
 

})
export class AdminMicroModule {}
