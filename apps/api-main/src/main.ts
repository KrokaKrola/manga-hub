import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { MainServiceClientOptions } from './microservice';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(MainServiceClientOptions);

  await app.startAllMicroservices();

  Logger.log(`🚀 Main api microservice`);
}

bootstrap();
