import { NestFactory } from '@nestjs/core';
import { ContentMicroModule } from './content-micro.module';
import { BlogConfig, setupMicro } from '@res/common';

async function bootstrap() {
  await setupMicro(ContentMicroModule, BlogConfig(), 'Blog');
}
bootstrap();