import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667199261641 implements MigrationInterface {
    name = '$npmConfigName1667199261641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "houses" DROP CONSTRAINT "FK_6bc43df38421c743ef8033fa681"`);
        await queryRunner.query(`ALTER TABLE "houses" RENAME COLUMN "farmIdId" TO "farm_id"`);
        await queryRunner.query(`ALTER TABLE "houses" ADD CONSTRAINT "FK_d9e08fb21a65312d61c1549a212" FOREIGN KEY ("farm_id") REFERENCES "farms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "houses" DROP CONSTRAINT "FK_d9e08fb21a65312d61c1549a212"`);
        await queryRunner.query(`ALTER TABLE "houses" RENAME COLUMN "farm_id" TO "farmIdId"`);
        await queryRunner.query(`ALTER TABLE "houses" ADD CONSTRAINT "FK_6bc43df38421c743ef8033fa681" FOREIGN KEY ("farmIdId") REFERENCES "farms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
