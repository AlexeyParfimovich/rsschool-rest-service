import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../resources/users/user.entity";
import { hashSync } from 'bcryptjs';

const admin = new User({ name: 'System user', login: 'Admin', password: hashSync('Admin', 10)});

export class AddUser1624435994704 implements MigrationInterface {
    name = 'AddUser1624435994704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "user" VALUES ('${admin.id}', '${admin.name}', '${admin.login}', '${admin.password}')`);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "user" WHERE "login" = '${admin.login}'`);
    }

}

export { AddUser1624435994704 as AddUser}