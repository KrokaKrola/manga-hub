import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../domain/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(
        @InjectRepository(UserMapper)
        private readonly repository: Repository<UserEntity>
    ) {
        super(repository.target, repository.manager, repository.queryRunner);
    }

    public async findByEmail(email: string): Promise<UserEntity> {
        return this.findOneBy({ email });
    }
}
