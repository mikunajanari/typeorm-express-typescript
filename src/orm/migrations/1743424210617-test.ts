import {MigrationInterface, QueryRunner} from "typeorm";

export class test1743424210617 implements MigrationInterface {
    name = 'test1743424210617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD "test" boolean NOT NULL DEFAULT false
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "test"
        `);
    }

}