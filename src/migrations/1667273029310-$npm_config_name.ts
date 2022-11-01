import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667273029310 implements MigrationInterface {
    name = '$npmConfigName1667273029310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cages" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "house_id" uuid, CONSTRAINT "PK_46660b866b01354ca93c573cc78" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cages" ADD CONSTRAINT "FK_f533aea58a9ce20102d4334023a" FOREIGN KEY ("house_id") REFERENCES "houses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cages" DROP CONSTRAINT "FK_f533aea58a9ce20102d4334023a"`);
        await queryRunner.query(`DROP TABLE "cages"`);
    }

}
