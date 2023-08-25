import { BaseSchema } from './base.schema';
import { UserContactsEntity } from '../../../domain/users/entities/user-contacts.entity';

export const UserContactsMapper = new BaseSchema<UserContactsEntity>({
    name: UserContactsEntity.name,
    tableName: 'user_contacts',
    target: UserContactsEntity,
    columns: {
        country: {
            type: String,
            length: 256,
        },
        phone: {
            type: String,
            length: 32,
        },
        userId: {
            name: 'user_id',
            type: 'bigint',
        },
    },
    relations: {
        user: {
            // ^------ this column is the inverseSide value in user.mapper
            type: 'one-to-one',
            target: 'users',
            joinColumn: {
                name: 'user_id',
            },
            cascade: true,
            inverseSide: 'contacts',
        },
    },
});
