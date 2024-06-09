import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import {  MapsController } from './maps.controller';
import {  MapsService } from './maps.service';
 
 
@Module({
  imports: [CacheModule],
  // imports: [CacheModule.register(),ConfigModule],

  controllers: [MapsController],
  providers: [MapsService],
})
export class MapsModule {}
