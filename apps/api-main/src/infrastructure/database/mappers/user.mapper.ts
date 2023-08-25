import { BaseSchema } from './base.schema';
import { UserEntity } from '../../../domain/users/entities/user.entity';

export const UserMapper = new BaseSchema<UserEntity>({
    name: UserEntity.name,
    tableName: 'users',
    target: UserEntity,
    columns: {
        name: {
            type: String,
            length: 254,
            nullable: false,
        },
        email: {
            type: String,
            length: 254,
            nullable: false,
            unique: true,
        },
        passwordHash: {
            name: 'password_hash',
            type: String,
            length: 128,
        },
        deletedAt: {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            nullable: true,
        },
        updatedAt: {
            name: 'updated_at',
            type: 'timestamp with time zone',
            update: true,
            nullable: true,
            default: 'now()',
        },
    },
    relations: {
        contacts: {
            type: 'one-to-one',
            target: 'user_contacts',
            inverseSide: 'user', // <---- -name of relation column in UserContactsEntity
        },
        posts: {
            type: 'one-to-many',
            target: 'posts',
            inverseSide: 'user',
        },
    },
});
