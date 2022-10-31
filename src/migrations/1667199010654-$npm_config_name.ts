import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667199010654 implements MigrationInterface {
    name = '$npmConfigName1667199010654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "houses" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "farmIdId" uuid, CONSTRAINT "PK_ee6cacb502a4b8590005eb3dc8d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "houses" ADD CONSTRAINT "FK_6bc43df38421c743ef8033fa681" FOREIGN KEY ("farmIdId") REFERENCES "farms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "houses" DROP CONSTRAINT "FK_6bc43df38421c743ef8033fa681"`);
        await queryRunner.query(`DROP TABLE "houses"`);
    }

}
