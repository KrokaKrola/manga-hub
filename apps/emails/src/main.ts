import { Logger } from '@nestjs/common';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  // const port = process.env.PORT || 3000;
  // await app.listen(port);
  Logger.log(
    `🚀 Emails microservice`
  );
}

bootstrap();
