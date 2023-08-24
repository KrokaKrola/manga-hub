import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class PostsCreatedUpdatedDeletedAtColumns1692882929958
    implements MigrationInterface
{
    name = 'PostsCreatedUpdatedDeletedAtColumns1692882929958';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('posts', [
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
            new TableColumn({
                name: 'created_at',
                type: 'timestamp with time zone',
                default: 'now()',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('posts', 'deleted_at');
        await queryRunner.dropColumn('posts', 'updated_at');
        await queryRunner.dropColumn('posts', 'created_at');
    }
}
