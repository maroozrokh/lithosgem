import { Module } from '@nestjs/common';
 
import { CacheModule } from '@res/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogProxyModule } from '@res/common/proxy/blog';
 
@Module({
  imports: [CacheModule],
  controllers: [BlogController],
  providers: [BlogService,],
})
export class BlogModule {}
