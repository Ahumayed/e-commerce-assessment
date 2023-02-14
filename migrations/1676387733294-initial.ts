import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class products1676387733294 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        queryRunner.createTable(new Table({
            name: "categories",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "description",
                    type: "text"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                }]
        }));
        
        queryRunner.createTable(new Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "price",
                    type: "decimal",
                    precision: 10,
                    scale: 2
                },
                {
                    name: "description",
                    type: "text"
                },
                {
                    name: "stock",
                    type: "int"
                },
                {
                    name: "image",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                }]
        }));

        queryRunner.createTable(new Table({
            name: "products_categories",
            columns: [
                {
                    name: "product_id",
                    type: "int"
                },
                {
                    name: "category_id",
                    type: "int"
                }
            ]
        }));
        queryRunner.createPrimaryKey("products_categories", ["product_id", "category_id"]);
        queryRunner.createForeignKey("products_categories", new TableForeignKey({
            columnNames: ["product_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
            onDelete: "CASCADE"
        }));
        queryRunner.createForeignKey("products_categories", new TableForeignKey({
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("products_categories");
        queryRunner.dropTable("products");
        queryRunner.dropTable("categories");
    }

}
