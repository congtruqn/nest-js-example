import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667445475355 implements MigrationInterface {
    name = '$npmConfigName1667445475355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "farms" ADD "longitude" integer`);
        await queryRunner.query(`ALTER TABLE "farms" ADD "latitude" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "longitude"`);
    }

}
