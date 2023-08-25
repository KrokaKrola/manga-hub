import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMapper } from '../database/mappers/user.mapper';
import { UserRepository } from '../database/repositories/user.repository';
import { LoginUserAction } from '../../application/users/login-user.action';
import { AuthController } from '../../presentation/controllers/auth.controller';
import { UserContactsMapper } from '../database/mappers/user-contacts.mapper';
import { UserContactsRepository } from '../database/repositories/user-contacts.repository';
import { UserController } from '../../presentation/controllers/user.controller';
import { AddUserContactInformationAction } from '../../application/users/add-user-contact-information.action';

@Module({
    imports: [TypeOrmModule.forFeature([UserMapper, UserContactsMapper])],
    providers: [
        UserRepository,
        UserContactsRepository,
        LoginUserAction,
        AddUserContactInformationAction,
    ],
    exports: [UserRepository],
    controllers: [AuthController, UserController],
})
export class UserModule {}
