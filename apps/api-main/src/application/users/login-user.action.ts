import { Injectable } from '@nestjs/common';
import { LoginUserRequest } from '../../presentation/requests/login-user.request';
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';
import { UserEntity } from '../../domain/users/entities/user.entity';
import { UserExistsException } from '../../infrastructure/exceptions/user-exists.exception';

@Injectable()
export class LoginUserAction {
    constructor(private readonly usersRepository: UserRepository) {}

    public async execute(payload: LoginUserRequest) {
        const existingUser = await this.usersRepository.findByEmail(
            payload.email
        );

        if (existingUser) {
            throw new UserExistsException();
        }

        const user = new UserEntity(
            payload.name,
            payload.email,
            payload.password
        );

        return await this.usersRepository.save(user);
    }
}
