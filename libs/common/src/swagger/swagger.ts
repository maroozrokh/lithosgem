import {
    DocumentBuilder,
    SwaggerCustomOptions,
    SwaggerModule,
  } from '@nestjs/swagger';
  import { INestApplication, VersioningType } from '@nestjs/common';
  import { ISwagger } from './iswagger';
  /**
   * Swagger Configuration
   */
  export class Swagger {
  /**
     * Constructor Swagger
     * @param app INestApplication
     * @param config ConfigService
     */ 
    constructor(app: INestApplication, is: ISwagger) {
      app.enableVersioning({
        type: VersioningType.URI,
      });
      const options = new DocumentBuilder()
        .setTitle(is.name)
        .setDescription(is.name + ' v1.0.1 ')
        .setVersion('1.0')
        .addBearerAuth()
        .addServer(`${is.url}/`, 'local')
        .build();
      const customOption: SwaggerCustomOptions = {
        swaggerOptions: {
          persistAuthorization: true,
          docExpansion: 'none',
          layout: 'StandaloneLayout',
        },
        explorer: true,
        customSiteTitle: is.name + ' API Docs',
      };
      const document = SwaggerModule.createDocument(app, options);
      SwaggerModule.setup(is.path, app, document, customOption);
    }
  }
  