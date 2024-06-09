import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import {  FaqController } from './faq.controller';
import {  FaqService } from './faq.service';

 
@Module({
  imports: [CacheModule],
  // imports: [CacheModule.register(),ConfigModule],

  controllers: [FaqController],
  providers: [FaqService,],
})
export class FaqModule {}
