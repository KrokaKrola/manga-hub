import { BaseEntity } from '../../../infrastructure/database/utils/base.entity';

export class UserContactsEntity extends BaseEntity {
    phone?: string;

    country?: string;

    constructor(phone?: string, country?: string) {
        super();
        this.phone = phone;
        this.country = country;
    }
}
