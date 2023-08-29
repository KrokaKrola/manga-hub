import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UserModule } from './infrastructure/ioc/user.module';
import typeorm from './infrastructure/database/config';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    UserModule,
  ],
  controllers: [],
})
export class AppModule {}
