import "reflect-metadata";
import { createConnection } from 'typeorm';

import * as cfg from './common/config';
import { logger } from './errors/logger';
import { User } from "./resources/users/user.entity";
import { Board } from "./resources/boards/board.entity";
import { Task } from "./resources/tasks/task.entity";
import app from './app';

createConnection({
  type: "postgres",
  host: cfg.POSTGRES_HOST,
  port: cfg.POSTGRES_PORT,
  database: cfg.POSTGRES_DB,
  username: cfg.POSTGRES_USER,
  password: cfg.POSTGRES_PASSWORD,
  entities: [
      User, Board, Task,
  ],
  synchronize: cfg.POSTGRES_SYNCHRONIZE,
  logging: cfg.POSTGRES_LOGGING
}).then(async connection => {

  logger.log('info', `TypeORM connected to ${connection.options.type} database on port ${cfg.POSTGRES_PORT}`)

  // await connection.runMigrations();

  app.listen(cfg.PORT, () => {
    logger.log('info',`Application is running on http://localhost:${cfg.PORT}`);
  });

}).catch(error => logger.log('error', `TypeORM connection: ${error}`));

