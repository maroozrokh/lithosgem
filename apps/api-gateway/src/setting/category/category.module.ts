import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import {  CatService } from './category.service';
import { CatController } from './category.controller';
 
@Module({
  imports: [CacheModule],
  // imports: [CacheModule.register(),ConfigModule],

  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
