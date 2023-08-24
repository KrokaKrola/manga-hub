import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './infrastructure/rest/filters/global-exception.filter';
import { ValidationPipe } from '@manga-hub/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(bodyParser.json());
    app.use(cookieParser());

    app.useGlobalFilters(new GlobalExceptionFilter());
    app.useGlobalPipes(new ValidationPipe());

    const port = process.env.PORT || 3000;
    await app.listen(port);
    Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
