import { BaseSchema } from './base.schema';
import { PostEntity } from '../../../domain/posts/entities/post.entity';
import { UserEntity } from '../../../domain/users/entities/user.entity';

export const PostMapper = new BaseSchema<PostEntity>({
    name: PostEntity.name,
    tableName: 'posts',
    target: PostEntity,
    columns: {
        name: {
            type: String,
            length: 254,
            nullable: false,
        },
        description: {
            type: String,
            length: 512,
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
            onUpdate: 'now()',
            nullable: true,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: UserEntity.name,
            joinColumn: {
                name: 'user_id',
            },
        },
    },
});
