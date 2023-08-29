import { ProfileEntity } from './profile.entity';

export class UserEntity {
  id: number;

  nickname: string;

  email: string;

  passwordHash: string;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;

  profile: ProfileEntity;

  constructor(nickname: string, email: string, passwordHash: string) {
    this.nickname = nickname;
    this.email = email;
    this.passwordHash = passwordHash;
  }
}
