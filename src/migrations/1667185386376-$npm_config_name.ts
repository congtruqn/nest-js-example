import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667185386376 implements MigrationInterface {
    name = '$npmConfigName1667185386376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "farms" ADD "business_unit" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "business_unit"`);
    }

}
