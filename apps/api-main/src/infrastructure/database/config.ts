import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Init1692869974880 } from './migrations/1692869974880-init';
import { Posts1692881215622 } from './migrations/1692881215622-posts';
import { DeletedAndUpdatedAtForUser1692881770537 } from './migrations/1692881770537-deleted-and-updated-at-for-user';
import { PostsCreatedUpdatedDeletedAtColumns1692882929958 } from './migrations/1692882929958-posts-created-updated-deleted-at-columns';
import { UserContacts1692905485307 } from './migrations/1692905485307-user-contacts';
import { UserCreateAt1692969570885 } from './migrations/1692969570885-user-create-at';
import * as path from 'path';

dotenvConfig({ path: './apps/api-main/.env' });

console.log(
  path.join(
    process.cwd(),
    'dist/apps/api-main/apps/api-main/src/infrastructure/database/mappers/*.mapper.js',
  ),
);

const config: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    path.join(
      process.cwd(),
      'dist/apps/api-main/apps/api-main/src/infrastructure/database/mappers/*.mapper.js',
    ),
  ],
  synchronize: false,

  logging: true,
  logger: 'file',

  migrationsRun: true,
  migrationsTableName: 'migrations',
  migrations: [
    path.join(
      process.cwd(),
      'dist/apps/api-main/apps/api-main/src/infrastructure/database/migrations/*.js',
    ),
  ],
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config);
