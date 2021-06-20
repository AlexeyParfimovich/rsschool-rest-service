import { Sequelize } from 'sequelize';
import * as config from "./common/config.js";
import { logger } from './errors/logger.js';

// database username   password
const sequelize = new Sequelize(
  config.POSTGRES_DB,
  config.POSTGRES_USER, 
  config.POSTGRES_PASSWORD, 
    { host: config.POSTGRES_HOST,
      port: config.POSTGRES_PORT,
      dialect: 'postgres',
      logging: false,
      // operatorsAliases: false
    }
)

sequelize.authenticate()
.then(() => logger.log('info', `Connected to DB ${config.POSTGRES_HOST} : ${config.POSTGRES_PORT}`))
.catch((err: Error) => logger.log('error', `DB error: ${err}`));

export default sequelize;
