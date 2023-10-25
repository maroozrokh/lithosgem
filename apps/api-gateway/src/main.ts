// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './api-gateway.module';
// import { VersioningType } from '@nestjs/common';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { ISwagger, Swagger } from '@res/common';
// import { url } from 'inspector';
// import path from 'path';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   // app.enableVersioning({
//   //   type: VersioningType.URI,
//   // })
//   // const swaggerConfig =  new DocumentBuilder()
//   // .setTitle('lithos gem')
//   // .setDescription('lithos gem website')
//   // .setVersion('1.0')
//   // .build();
//   // const document = SwaggerModule.createDocument(app,swaggerConfig);
//   // SwaggerModule.setup('/',app,document);

//   // const swagger: ISwagger = ApiGatewayConfig().swagger;
//   let swaggers = {
//     url: process.env.API_GATEWAY_URL,
//     path: '/',
//     name: 'lithos',
//   }
//   const swagger: ISwagger = swaggers;
//   new Swagger(app, swagger);
  
//   await app.listen(3000);
// }
// bootstrap();




declare const module: any;
import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { join } from 'path';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ApiGatewayConfig, ISwagger, Swagger } from '@res/common';
async function bootstrap() {
  const logger = new Logger('API_GATEWAY');
  const app = await NestFactory.create<any>(ApiGatewayModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      disableErrorMessages: false,
   
    }),
  );
  app.useStaticAssets(join(__dirname, '../../..', 'public'));
  app.enableCors(ApiGatewayConfig().cors);
  const swagger: ISwagger = ApiGatewayConfig().swagger;
  new Swagger(app, swagger);
  app.enableShutdownHooks();
  await app.listen(ApiGatewayConfig().port);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  logger.verbose(
    `#${
      ApiGatewayConfig().swagger.name
    } Application is running on: ${await app.getUrl()}`,
  );
}
bootstrap();

