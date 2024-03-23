import { Module } from '@nestjs/common';
 import { CacheModule } from '@res/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
 
@Module({
  imports: [CacheModule],
  controllers: [AdminController],
  providers: [AdminService,],
})
export class AdminModule {}
