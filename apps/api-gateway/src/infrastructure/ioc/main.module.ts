import { Module } from '@nestjs/common';
import { MainService } from '../external/main/main.service';
import { AuthController } from '../../presentation/controllers/auth/auth.controller';
import { ClientsModule } from '@nestjs/microservices';
import { MainServiceClientOptions } from '../external/main/config';

@Module({
  imports: [ClientsModule.registerAsync(MainServiceClientOptions)],
  providers: [MainService],
  controllers: [AuthController],
})
export class MainModule {}
