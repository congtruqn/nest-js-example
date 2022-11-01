import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667286287164 implements MigrationInterface {
    name = '$npmConfigName1667286287164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cages" DROP CONSTRAINT "FK_f533aea58a9ce20102d4334023a"`);
        await queryRunner.query(`ALTER TABLE "cages" RENAME COLUMN "house_id" TO "cage_id"`);
        await queryRunner.query(`ALTER TABLE "cages" RENAME COLUMN "cage_id" TO "house_id"`);
        await queryRunner.query(`ALTER TABLE "cages" DROP COLUMN "house_id"`);
        await queryRunner.query(`ALTER TABLE "cages" ADD "cage_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cages" ADD "house_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cages" ADD CONSTRAINT "FK_eac54058d056ff5599af85d8c6f" FOREIGN KEY ("cage_id") REFERENCES "cages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cages" ADD CONSTRAINT "FK_f533aea58a9ce20102d4334023a" FOREIGN KEY ("house_id") REFERENCES "houses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cages" DROP CONSTRAINT "FK_f533aea58a9ce20102d4334023a"`);
        await queryRunner.query(`ALTER TABLE "cages" DROP CONSTRAINT "FK_eac54058d056ff5599af85d8c6f"`);
        await queryRunner.query(`ALTER TABLE "cages" DROP COLUMN "house_id"`);
        await queryRunner.query(`ALTER TABLE "cages" DROP COLUMN "cage_id"`);
        await queryRunner.query(`ALTER TABLE "cages" ADD "house_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cages" RENAME COLUMN "house_id" TO "cage_id"`);
        await queryRunner.query(`ALTER TABLE "cages" RENAME COLUMN "cage_id" TO "house_id"`);
        await queryRunner.query(`ALTER TABLE "cages" ADD CONSTRAINT "FK_f533aea58a9ce20102d4334023a" FOREIGN KEY ("house_id") REFERENCES "houses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
