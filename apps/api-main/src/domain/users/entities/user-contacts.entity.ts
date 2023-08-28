import { BaseEntity } from '../../../infrastructure/database/utils/base.entity';
import { UserEntity } from './user.entity';

export class UserContactsEntity extends BaseEntity {
    phone: string;

    country: string;

    user?: UserEntity;

    userId?: number;

    constructor(user: UserEntity, phone: string, country: string) {
        super();
        this.phone = phone;
        this.country = country;
        this.user = user;
        this.userId = user?.id;
    }
}
