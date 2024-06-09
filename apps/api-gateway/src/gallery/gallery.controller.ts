import { TGem, IGem, IFindAllVideos } from './../../../../libs/interface/src/gallery/index';
import { EditeGemDto } from './../gem/dto/edite_gem.dto';
import { Payload } from '@nestjs/microservices';
import { Body, Controller, Delete, Get,  HttpException,  HttpStatus,  Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {  GalleryService } from './gallery.service';

import { FindOneDto } from '../blog/dto/find_one_blog.dto';
import { FindAllGalleryDto } from './dto/finad_all_videos.dto';
import { FindAllGemDto } from '../gem/dto/finad_all_gem.dto';
import { AddGemDto } from '../gem/dto/add_gem.dto';
import { IFindAllGem } from '@libs/interface';
import { IimageScheme } from '@libs/schema/Gallery';
// import { EditeBlogDto } from './dto/edite_blog.dto';


@ApiTags('Gallery')
@Controller('gallery')
export class GalleryController {
  scraperService: any;
  constructor(private readonly galleryService: GalleryService
    // ,private readonly searchService: SearchService
  ) { }
  @ApiOperation({
    summary: 'Find all Videos',
    description: 'Find all Videos',
  })
  @Get('/')
  // @Auth(Role.ADMIN , Role.SUPER_ADMIN)
  findAllVideos(@Query() payload: FindAllGalleryDto) {
    return this.galleryService.findAllVideos(payload);


  }
    // @Get('/')
    //  getAllVideos(@Query() payload: FindAllGalleryDto)  {
    //  return  this.galleryService.findAllVideos(payload);
    //   }
  

    //   @Get('videos')
    //   async searchVideos(@Query('location') location?: string): Promise<IimageScheme[]> {
    //     const query = {
    //       query: {
    //         bool: {
    //           must: [
    //             // Add a query to match all documents (replace with your actual search criteria)
    //             { match_all: {} }
    //           ],
    //           filter: location ? { term: { location: location } } : {} // Filter by location if provided
    //         }
    //       }
    //     };
    
    //     return await this.searchService.searchVideos(query);
    //   }


  // @Get('scrape/:url') // Allow scraping from different website URLs
  // async scrapeVideosFromWebsite(@Param('url') url: string): Promise<string[]> {
  //   try {
  //     const videoURLs = await this.scraperService.scrapeVideos(url);
  //     return videoURLs;
  //   } catch (error) {
  //     throw new HttpException('Failed to scrape videos: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }







}
