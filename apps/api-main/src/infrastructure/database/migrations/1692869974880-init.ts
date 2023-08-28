import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Init1692869974880 implements MigrationInterface {
  name = 'Init1692869974880';

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
            name: 'name',
            type: 'varchar(254)',
          },
          {
            name: 'email',
            type: 'varchar(254)',
            isUnique: true,
          },
          {
            name: 'password_hash',
            type: 'varchar(128)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
