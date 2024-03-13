import { Module } from '@nestjs/common';
import { GemService } from './gem.service';
import { GemController } from './gem.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CacheModule.register()],
  controllers: [GemController],
  providers: [GemService]
})
export class GemModule {}
