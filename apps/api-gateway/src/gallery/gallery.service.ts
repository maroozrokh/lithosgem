import { IFindAllGem, IGem } from '@libs/interface';
import {  IFindAllVideos } from './../../../../libs/interface/src/gallery/index';

import { Injectable } from '@nestjs/common';
import { GalleryProxy } from '@res/common/proxy/gallery';
// import { ElasticsearchService } from '@res/common/elasticsearch/service';

@Injectable()
export class GalleryService {
  constructor(private readonly galleryProxy: GalleryProxy) {}
 

  findAllVideos(payload: IFindAllVideos) {
    return this.galleryProxy.findAllVideos(payload);
  }

 



}

// // import { ElasticsearchService } from './elasticsearch.service';

// // Interface for search query (optional, for better type safety)
// interface SearchQuery {
//   // Define properties for your search criteria (e.g., match, filter)
// }

// @Injectable()
// export class SearchService {
//   constructor(private readonly elasticsearchService: ElasticsearchService) {}

//   async searchVideos(query: SearchQuery): Promise<any[]> {
//     // Build the Elasticsearch query based on the provided query object
//     const esQuery = {
//       query: {
//         // ... construct the actual query using the properties from 'query' object
//       }
//     };

//     return await this.elasticsearchService.search({ indexName: 'videos', query: esQuery });
//   }
// }

// import * as puppeteer from 'puppeteer';

// @Injectable()
// export class ScraperService {
//   async scrapeVideos(url: string): Promise<string[]> {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto(url);

//     // Replace with selectors specific to the website's video elements
//     const videoElements = await page.$$eval('video, iframe[src*=".mp4"]', (elements) =>
//       elements.map((element) => element.getAttribute('src') || element.getAttribute('data-src'))
//     );

//     await browser.close();
//     return videoElements.filter((url) => url); // Filter out empty URLs
//   }
// }
