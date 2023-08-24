import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class DeletedAndUpdatedAtForUser1692881770537
    implements MigrationInterface
{
    name = 'DeletedAndUpdatedAtForUser1692881770537';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('users', [
            new TableColumn({
                name: 'deleted_at',
                type: 'timestamp with time zone',
                default: null,
                isNullable: true,
            }),
            new TableColumn({
                name: 'updated_at',
                type: 'timestamp with time zone',
                onUpdate: 'now()',
                isNullable: true,
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'deleted_at');
        await queryRunner.dropColumn('users', 'updated_at');
    }
}
