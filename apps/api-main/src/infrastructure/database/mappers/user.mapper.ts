import { BaseSchema } from './base.schema';
import { UserEntity } from '../../../domain/users/entities/user.entity';

export const UserMapper = new BaseSchema<UserEntity>({
  name: UserEntity.name,
  tableName: 'users',
  target: UserEntity,
  columns: {
    nickname: {
      type: String,
      length: 255,
      nullable: false,
    },
    email: {
      type: String,
      length: 255,
      nullable: false,
      unique: true,
    },
    passwordHash: {
      name: 'password_hash',
      type: String,
      length: 127,
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
      onUpdate: 'now()',
    },
  },
  relations: {
    profile: {
      type: 'one-to-one',
      target: 'ProfileEntity',
      inverseSide: 'user',
      onDelete: 'CASCADE',
    },
  },
});
