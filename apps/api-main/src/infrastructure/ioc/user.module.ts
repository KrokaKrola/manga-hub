import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMapper } from '../database/mappers/user.mapper';
import { UserRepository } from '../database/repositories/user.repository';
import { LoginUserAction } from '../../application/users/login-user.action';
import { AuthController } from '../../presentation/controllers/auth.controller';
import { UserController } from '../../presentation/controllers/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserMapper])],
  providers: [UserRepository, LoginUserAction],
  exports: [UserRepository],
  controllers: [AuthController, UserController],
})
export class UserModule {}
