import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import { AboutUsController } from './aboutUs.controller';
import { AboutUsService} from './aboutUs.service';
import { ConfigModule } from '@nestjs/config';
 
@Module({
  imports: [CacheModule],
  // imports: [CacheModule.register(),ConfigModule],

  controllers: [AboutUsController],
  providers: [AboutUsService,],
})
export class AboutUsModule {}
