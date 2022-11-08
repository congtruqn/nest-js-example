import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667818056419 implements MigrationInterface {
    name = '$npmConfigName1667818056419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animal_events" DROP CONSTRAINT "FK_2620179266cce316807e5ab4935"`);
        await queryRunner.query(`ALTER TABLE "animal_events" DROP COLUMN "eventsOfAnimalId"`);
        await queryRunner.query(`ALTER TABLE "animal_events" ADD "eventsOfAnimalId" uuid`);
        await queryRunner.query(`ALTER TABLE "animal_events" ADD CONSTRAINT "FK_2620179266cce316807e5ab4935" FOREIGN KEY ("eventsOfAnimalId") REFERENCES "animals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animal_events" DROP CONSTRAINT "FK_2620179266cce316807e5ab4935"`);
        await queryRunner.query(`ALTER TABLE "animal_events" DROP COLUMN "eventsOfAnimalId"`);
        await queryRunner.query(`ALTER TABLE "animal_events" ADD "eventsOfAnimalId" integer`);
        await queryRunner.query(`ALTER TABLE "animal_events" ADD CONSTRAINT "FK_2620179266cce316807e5ab4935" FOREIGN KEY ("eventsOfAnimalId") REFERENCES "animal_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
