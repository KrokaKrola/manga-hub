import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Init1693334369800 } from './migrations/1693334369800-init';
import { UserEntity } from '../../domain/users/entities/user.entity';
import { ProfileEntity } from '../../domain/users/entities/profile.entity';

dotenvConfig({ path: './apps/api-main/.env' });

const config: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [UserEntity, ProfileEntity],
  // entities: [
  //   path.join(
  //     process.cwd(),
  //     'dist/apps/api-main/apps/api-main/src/infrastructure/database/mappers/*.mapper.js',
  //   ),
  // ],

  synchronize: false,

  logging: true,
  logger: 'file',

  migrationsRun: true,
  migrationsTableName: 'migrations',
  migrations: [Init1693334369800],
  // migrations: [
  //   path.join(
  //     process.cwd(),
  //     'dist/apps/api-main/apps/api-main/src/infrastructure/database/migrations/*.js',
  //   ),
  // ],
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config);
