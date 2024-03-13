import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { ConfigModule } from '@nestjs/config';
 
@Module({
  imports: [CacheModule],
  // imports: [CacheModule.register(),ConfigModule],

  controllers: [BlogController],
  providers: [BlogService,],
})
export class BlogModule {}
