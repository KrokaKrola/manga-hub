import { BaseEntity } from '../../../infrastructure/database/utils/base.entity';

export class UserEntity extends BaseEntity {
    name: string;

    email: string;

    passwordHash: string;

    updatedAt?: Date;

    deletedAt?: Date;

    socialsId?: number;

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
