import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667458523508 implements MigrationInterface {
    name = '$npmConfigName1667458523508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cages" DROP CONSTRAINT "FK_f533aea58a9ce20102d4334023a"`);
        await queryRunner.query(`ALTER TABLE "cages" RENAME COLUMN "house_id" TO "parn_id"`);
        await queryRunner.query(`CREATE TABLE "parns" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "farm_id" uuid, CONSTRAINT "PK_90ef578b9d2a0a67afffea5b8ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cages" ADD CONSTRAINT "FK_ff05ce59e0eacad50a3556efd92" FOREIGN KEY ("parn_id") REFERENCES "parns"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parns" ADD CONSTRAINT "FK_ce5c180d705453cfae5a2a3fdb4" FOREIGN KEY ("farm_id") REFERENCES "farms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parns" DROP CONSTRAINT "FK_ce5c180d705453cfae5a2a3fdb4"`);
        await queryRunner.query(`ALTER TABLE "cages" DROP CONSTRAINT "FK_ff05ce59e0eacad50a3556efd92"`);
        await queryRunner.query(`DROP TABLE "parns"`);
        await queryRunner.query(`ALTER TABLE "cages" RENAME COLUMN "parn_id" TO "house_id"`);
        await queryRunner.query(`ALTER TABLE "cages" ADD CONSTRAINT "FK_f533aea58a9ce20102d4334023a" FOREIGN KEY ("house_id") REFERENCES "houses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
