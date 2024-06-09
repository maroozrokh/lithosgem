import { Inject, Injectable } from '@nestjs/common';
 import { AProxy } from '../base/proxy-service';
import { GalleryPattern } from './enum';
import { IFindAllVideos } from '@libs/interface/gallery';

 

@Injectable()
export class GalleryProxy extends AProxy<GalleryProxy> {

  constructor(@Inject(GalleryPattern.NAME) galleryProxy: GalleryProxy) {
    super(galleryProxy);
  }

  findAllVideos(payload: IFindAllVideos) {
    return this.send(GalleryPattern.FIND_ALL_VIDEOS, payload);
  }
  

//  async parseVideosWithPuppeteer(): Promise<string[]> {
//   // Launch a new browser instance
//   const browser = await Browser.launch();
//   const page = await browser.newPage();

//   // Navigate to the target website
//   await page.goto('https://lithosgem.com');

//   // Wait for the page to load completely
//   await page.waitForSelector('body');

//   // Extract video URLs from the website's HTML
//   const videoURLs = [];
//   const videoElements = await page.$$('video, iframe[src*=".mp4"]'); // Example selector

//   for (const videoElement of videoElements) {
//     const videoURL = await videoElement.getProperty('src').evaluate((el) => el.textContent);
//     if (videoURL) {
//       videoURLs.push(videoURL);
//     }
//   }

//   // Close the browser instance
//   await browser.close();

//   return videoURLs;
// }
 


}


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

