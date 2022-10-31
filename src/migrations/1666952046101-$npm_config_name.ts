import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1666952046101 implements MigrationInterface {
    name = '$npmConfigName1666952046101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."farms_type_enum"`);
        await queryRunner.query(`ALTER TABLE "farms" ADD "farm_type" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "farms" ADD "farm_size" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "farms" ADD "contact_persion" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "farms" ADD "contact_phone" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "region"`);
        await queryRunner.query(`ALTER TABLE "farms" ADD "region" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "region"`);
        await queryRunner.query(`ALTER TABLE "farms" ADD "region" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "contact_phone"`);
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "contact_persion"`);
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "farm_size"`);
        await queryRunner.query(`ALTER TABLE "farms" DROP COLUMN "farm_type"`);
        await queryRunner.query(`CREATE TYPE "public"."farms_type_enum" AS ENUM('1', '0')`);
        await queryRunner.query(`ALTER TABLE "farms" ADD "type" "public"."farms_type_enum" NOT NULL DEFAULT '1'`);
    }

}
