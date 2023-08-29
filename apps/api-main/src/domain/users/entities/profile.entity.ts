import { SexEnum } from '../enums/sex.enum';
import { UserEntity } from './user.entity';

export class ProfileEntity {
  id: number;

  sex: SexEnum;

  bio: string;

  withHighAgeTitles: boolean;

  fullName: string;

  userId: number;

  user: UserEntity;

  createdAt: Date;

  updatedAt: Date;

  constructor(
    sex?: SexEnum,
    bio?: string,
    withHighAgeTitles?: boolean,
    fullName?: string,
  ) {
    this.sex = sex || null;
    this.bio = bio || null;
    this.withHighAgeTitles = withHighAgeTitles ?? true;
    this.fullName = fullName || null;
  }
}
