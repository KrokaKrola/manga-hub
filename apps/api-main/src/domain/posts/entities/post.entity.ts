import { BaseEntity } from '../../../infrastructure/database/utils/base.entity';
import { UserEntity } from '../../users/entities/user.entity';

export class PostEntity extends BaseEntity {
    name: string;

    description: string;

    user: UserEntity;

    deletedAt?: Date;

    updatedAt?: Date;

    constructor(name: string, description: string, user: UserEntity) {
        super();
        this.name = name;
        this.description = description;
        this.user = user;
    }
}
