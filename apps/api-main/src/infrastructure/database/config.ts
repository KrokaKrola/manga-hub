import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { UserMapper } from './mappers/user.mapper';
import { Init1692869974880 } from './migrations/1692869974880-init';
import { PostMapper } from './mappers/post.mapper';
import { Posts1692881215622 } from './migrations/1692881215622-posts';
import { DeletedAndUpdatedAtForUser1692881770537 } from './migrations/1692881770537-deleted-and-updated-at-for-user';
import { PostsCreatedUpdatedDeletedAtColumns1692882929958 } from './migrations/1692882929958-posts-created-updated-deleted-at-columns';
import { UserContactsMapper } from './mappers/user-contacts.mapper';
import { UserContacts1692905485307 } from './migrations/1692905485307-user-contacts';

dotenvConfig({ path: './apps/api-main/.env' });

const config: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [UserMapper, PostMapper, UserContactsMapper],
    synchronize: false,

    logging: true,
    logger: 'file',

    migrationsRun: true,
    migrationsTableName: 'migrations',
    migrations: [
        Init1692869974880,
        Posts1692881215622,
        DeletedAndUpdatedAtForUser1692881770537,
        PostsCreatedUpdatedDeletedAtColumns1692882929958,
        UserContacts1692905485307,
    ],
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config);
