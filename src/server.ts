import "reflect-metadata";
import { ConnectionOptions, createConnection } from 'typeorm';

import { PORT, POSTGRES_PORT } from "./common/config";
import { logger } from './errors/logger';
import ormconfig from "./ormconfig";
import app from './app';

(async ()=> {
  await createConnection(<ConnectionOptions>ormconfig).then(async connection => {
  
    logger.log('info', `TypeORM connected to ${connection.options.type} database on port ${POSTGRES_PORT}`)
  
    app.listen(PORT, () => {
      logger.log('info',`Application is running on http://localhost:${PORT}`);
    });
  
  }).catch(error => logger.log('error', `TypeORM connection: ${error}`));
})();

