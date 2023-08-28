import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { MainServiceClientOptions } from './microservice';
import { MicroserviceOptions } from '@nestjs/microservices';
import { HttpExceptionFilter } from './infrastructure/rest/filters/http-exception.filter';
import { RpcExceptionFilter } from './infrastructure/rest/filters/rpc-exception.filter';
import { ValidationPipe } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new RpcExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice<MicroserviceOptions>(MainServiceClientOptions, {
    inheritAppConfig: true,
  });

  await app.startAllMicroservices();

  Logger.log(`🚀 Main api microservice`);
}

bootstrap();
