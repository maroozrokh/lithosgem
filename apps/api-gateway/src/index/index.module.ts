import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import {  IndexService } from './index.service';
import { IndexController } from './index.controller';
 
@Module({
  imports: [CacheModule],
  controllers: [IndexController],
  providers: [IndexService,],
})
export class IndexModule {}
