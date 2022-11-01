import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667286409750 implements MigrationInterface {
    name = '$npmConfigName1667286409750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cages" DROP CONSTRAINT "FK_eac54058d056ff5599af85d8c6f"`);
        await queryRunner.query(`CREATE TABLE "pens" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "cage_id" uuid, CONSTRAINT "PK_07316a7985f90fac4a790b4c5f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cages" DROP COLUMN "cage_id"`);
        await queryRunner.query(`ALTER TABLE "pens" ADD CONSTRAINT "FK_52f5cb65327cf473c6c4ca47e5b" FOREIGN KEY ("cage_id") REFERENCES "cages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pens" DROP CONSTRAINT "FK_52f5cb65327cf473c6c4ca47e5b"`);
        await queryRunner.query(`ALTER TABLE "cages" ADD "cage_id" uuid`);
        await queryRunner.query(`DROP TABLE "pens"`);
        await queryRunner.query(`ALTER TABLE "cages" ADD CONSTRAINT "FK_eac54058d056ff5599af85d8c6f" FOREIGN KEY ("cage_id") REFERENCES "cages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
