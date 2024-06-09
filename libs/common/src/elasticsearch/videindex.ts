import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IimageScheme } from '@libs/schema/Gallery';
import { ElasticsearchService } from './service';

@Injectable()
export class VideoIndexingService {
  constructor(
    @InjectModel(IimageScheme.name) private readonly videoModel: Model<IimageScheme>,
    private readonly elasticsearchService: ElasticsearchService
  ) {}

  async indexVideos(): Promise<void> {
    const videos = await this.videoModel.find();
    for (const video of videos) {
      await this.elasticsearchService.indexDocument('videos', video);
    }
  }
}