import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../domain/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMapper } from '../mappers/user.mapper';
import { UserContactsMapper } from '../mappers/user-contacts.mapper';
import { UserContactsEntity } from '../../../domain/users/entities/user-contacts.entity';

@Injectable()
export class UserContactsRepository extends Repository<UserContactsEntity> {
    constructor(
        @InjectRepository(UserContactsMapper)
        private readonly repository: Repository<UserContactsEntity>
    ) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
