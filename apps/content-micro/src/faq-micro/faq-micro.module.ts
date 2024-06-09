import { Module, forwardRef } from '@nestjs/common';
import { FaqMicroController } from './faq-micro.controller';
import {  FaqMicroService } from './faq-micro.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminFeature, AdminRepository, BlogFeature, BlogRepository, FAQFeature, FaqRepository, ImageFeature, ImageRepository } from '@libs/schema';
import { BlogContentFeature, BlogContentRepository } from '@libs/schema/BlogContent';

@Module({
  imports: [MongooseModule.forFeature([AdminFeature, BlogFeature,ImageFeature,BlogContentFeature,FAQFeature])],
  controllers: [FaqMicroController],
  providers: [FaqMicroService,FaqRepository,AdminRepository,BlogContentRepository,  {
    provide: 'FAQModel',
    useFactory: () => forwardRef(() => FaqRepository), // Reference FaqRepository here
  },
  FaqRepository,],
})



export class FaqMicroModule {}
