import { Module } from '@nestjs/common';
import { GemService } from './gem.service';
import { GemController } from './gem.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule],
  controllers: [GemController],
  providers: [GemService]
})
export class GemModule {}
