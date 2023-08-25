import { Module } from '@nestjs/common';
import { MainService } from '../external/main/main.service';
import { AuthController } from '../../presentation/controllers/auth.controller';
import { ClientsModule } from '@nestjs/microservices';
import { MainServiceClientOptions } from '../external/main/config';
import { PostsController } from '../../presentation/controllers/posts.controller';
import { UsersController } from '../../presentation/controllers/users.controller';

@Module({
    imports: [ClientsModule.registerAsync(MainServiceClientOptions)],
    providers: [MainService],
    controllers: [AuthController, PostsController, UsersController],
})
export class MainModule {}
