// import { Injectable } from '@nestjs/common';
// import { Client } from '@elastic/elasticsearch';

// @Injectable()
// export class ElasticsearchService {
//   private readonly client: Client;

//   constructor() {
//     this.client = new Client({
//       node: 'http://localhost:9200' // Replace with your Elasticsearch URL
//     });
//   }

//   async createIndex(indexName: string, mapping: any): Promise<void> {
//     await this.client.indices.create({
//       index: indexName,
//       body: mapping
//     });
//   }

//   async indexDocument(indexName: string, document: any): Promise<void> {
//     await this.client.index({
//       index: indexName,
//       // type: '_doc', // Default document type in Elasticsearch
//       id: document._id,
//       body: document
//     });
//   }

//   async search({ indexName, query }: { indexName: string; query: any; }): Promise<SearchResult[]> {
//     const response = await this.client.search({
//       index: indexName,
//       body: query
//     });
//     return  response.body.hits.hits.map((hit) => hit._source);
//   }
// }


import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import {Query}  from '@elastic/elasticsearch';

@Injectable()
export class SearchService {
  private readonly client: Client;

  constructor() {
    this.client = new Client({
      node: 'http://localhost:9200',
    });
  }

  async searchProducts(term: string): Promise<any> {
    const query: Quary {
      query: {
        match: {
          name: term,
        },
      },
    };

    const results = await this.client.search({
      index: 'products',
      body: query,
    });

    return results.hits.hits;
  }
}