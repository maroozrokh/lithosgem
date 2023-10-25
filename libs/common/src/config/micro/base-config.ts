declare const module: any;
import { Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
export const setupMicro: any = async (
  AppModule: any,
  opts: any,
  name = 'App',
) => {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    opts,
  );
  await app.listen();
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  Logger.verbose(`${name} Microservice is running ${opts?.options?.port}`);
};
export const setupEnv = () => {
  return ConfigModule.forRoot({
    envFilePath: [`${process.cwd()}/env/.env`],
    isGlobal: true,
  });
};
