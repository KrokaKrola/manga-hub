import { BaseSchema } from './base.schema';
import { ProfileEntity } from '../../../domain/users/entities/profile.entity';
import { SexEnum } from '../../../domain/users/enums/sex.enum';

export const ProfileMapper = new BaseSchema<ProfileEntity>({
  name: ProfileEntity.name,
  tableName: 'profiles',
  target: ProfileEntity,
  columns: {
    sex: {
      type: 'enum',
      enum: SexEnum,
      nullable: true,
    },
    bio: {
      type: String,
      length: 511,
      nullable: true,
    },
    fullName: {
      type: String,
      length: 255,
      nullable: true,
    },
    userId: {
      type: 'bigint',
      name: 'user_id',
    },
    updatedAt: {
      name: 'updated_at',
      type: 'timestamp with time zone',
      update: true,
      default: 'now()',
      onUpdate: 'now()',
    },
  },
  relations: {
    user: {
      type: 'one-to-one',
      target: 'UserEntity',
      joinColumn: {
        name: 'user_id',
      },
      inverseSide: 'profile',
    },
  },
});
