import { Module } from '@nestjs/common';
import { AuthController } from './presentation/controllers/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AuthController],
})
export class AppModule {}
