import "reflect-metadata";
import { createConnection } from 'typeorm';

import { PORT, POSTGRES_DB, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD } from './common/config';
import { logger } from './errors/logger';
import { User } from "./resources/users/user.entity";
import { Board } from "./resources/boards/board.entity";
import { Task } from "./resources/tasks/task.entity";
import app from './app';

createConnection({
  type: "postgres",
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  entities: [
      User, Board, Task,
  ],
  synchronize: true,
  logging: false
}).then(async connection => {

  logger.log('info', `TypeORM connected to ${connection.options.type} database on port ${POSTGRES_PORT}`)

  // await connection.runMigrations();

  app.listen(PORT, () => {
    logger.log('info',`Application is running on http://localhost:${PORT}`);
  });

}).catch(error => logger.log('error', `TypeORM connection: ${error}`));

