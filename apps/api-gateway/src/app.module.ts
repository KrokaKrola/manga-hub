import { Module } from '@nestjs/common';
import { MainModule } from './infrastructure/ioc/main.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MainModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
