import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class User1567042085129 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "createdDate",
                        type: "datetime",
                    },
                    {
                        name: "updatedDate",
                        type: "datetime",
                    },
                ],
            }),
            true,
        )

        await queryRunner.createIndex(
            "users",
            new TableIndex({
                name: "IDX_USERS_EMAIL",
                columnNames: ["email"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropIndex("question", "IDX_USERS_EMAIL")
        await queryRunner.dropTable("users")
    }
}
