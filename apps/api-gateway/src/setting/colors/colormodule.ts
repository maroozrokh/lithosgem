import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
 
 
@Module({
  imports: [CacheModule],
  // imports: [CacheModule.register(),ConfigModule],

  controllers: [ColorController],
  providers: [ColorService],
})
export class ColorModule {}
