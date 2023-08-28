import { BaseEntity } from '../../../infrastructure/database/utils/base.entity';
import { UserContactsEntity } from './user-contacts.entity';
import { PostEntity } from '../../posts/entities/post.entity';

export class UserEntity extends BaseEntity {
    name: string;

    email: string;

    passwordHash: string;

    updatedAt?: Date;

    deletedAt?: Date;

    contacts?: UserContactsEntity;

    posts?: PostEntity[];

    constructor(
        name: string,
        email: string,
        passwordHash: string,
        updatedAt?: Date,
        deletedAt?: Date
    ) {
        super();
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.deletedAt = deletedAt;
        this.updatedAt = updatedAt;
    }
}
