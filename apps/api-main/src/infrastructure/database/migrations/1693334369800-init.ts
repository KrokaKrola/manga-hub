import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';
import { SexEnum } from '../../../domain/users/enums/sex.enum';

export class Init1693334369800 implements MigrationInterface {
  name = 'Init1693334369800';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nickname',
            type: 'varchar(255)',
          },
          {
            name: 'email',
            type: 'varchar(255)',
          },
          {
            name: 'passwordHash',
            type: 'varchar(127)',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
            onUpdate: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'profiles',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'sex',
            type: 'enum',
            enum: [SexEnum.FEMALE, SexEnum.MALE],
            isNullable: true,
          },
          {
            name: 'bio',
            type: 'varchar(511)',
            isNullable: true,
          },
          {
            name: 'full_name',
            type: 'varchar(255)',
          },
          {
            name: 'user_id',
            type: 'bigint',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
            onUpdate: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'profiles',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('profiles', 'user_id');
    await queryRunner.dropTable('profiles');
    await queryRunner.dropTable('users');
  }
}
