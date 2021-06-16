import "reflect-metadata";
import { createConnection } from 'typeorm';

import { PORT, POSTGRES_DB, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD } from './common/config.js';
import { logger } from './errors/logger.js';
import { User } from "./resources/users/user.model.js";
import app from './app.js';

createConnection({
  type: "postgres",
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  entities: [
      User,
  ],
  synchronize: true,
  logging: false
}).then(async connection => {

  logger.log('info', `TypeORM connected to ${connection.options.type} database on port ${POSTGRES_PORT}`)

  app.listen(PORT, () => {
    logger.log('info',`Application is running on http://localhost:${PORT}`);
  });

}).catch(error => logger.log('error', `TypeORM connection: ${error}`));

