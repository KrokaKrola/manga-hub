import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        entities: ['dist/infrastructure/database/mappers/*.js'],
        synchronize: false,

        url: configService.get<string>('DATABASE_URL'),

        logging: true,
        logger: 'file',

        migrationsRun: true,
        migrationsTableName: 'migrations',
        migrations: ['dist/infrastructure/database/migrations/*.js'],
      }),
    }),
  ],
})
export class DatabaseModule {}
