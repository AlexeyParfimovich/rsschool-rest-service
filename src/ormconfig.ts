import * as cfg from './common/config';
import { User } from "./resources/users/user.entity";
import { Task } from "./resources/tasks/task.entity";
import { Board } from "./resources/boards/board.entity";
import { CreateTables } from "./migration/createTables";
import { AddUser } from "./migration/addUser";

export = {
   type: "postgres",
   host: cfg.POSTGRES_HOST,
   port: cfg.POSTGRES_PORT,
   database: cfg.POSTGRES_DB,
   username: cfg.POSTGRES_USER,
   password: cfg.POSTGRES_PASSWORD,
   entities: [
     User, Board, Task,
   ],
   migrations: [
     CreateTables, AddUser,
   ],
   logging: cfg.POSTGRES_LOGGING,
   synchronize: cfg.POSTGRES_SYNCHRONIZE,
   migrationsRun: cfg.POSTGRES_MIGRATION_RUN,
   cli: {
     migrationsDir: "src/migration",
   }
};