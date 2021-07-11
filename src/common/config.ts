import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(path.resolve(), './.env')
});

const NODE_ENV = process.env['NODE_ENV'] ?? 'development';
const PORT = Number(process.env['PORT']) ?? 4000;
const AUTH_MODE = process.env['AUTH_MODE'] === 'true';
const USE_FASTIFY = process.env['USE_FASTIFY'] === 'true';
const JWT_SECRET_KEY = process.env['JWT_SECRET_KEY'] ?? 'secret-key';

const LOGGING_SUPPRESS = process.env['LOGGING_SUPPRESS'] === 'true';
const LOG_INFO_FILE = process.env['LOG_INFO_FILE'] ?? './logs/info.log';
const LOG_ERROR_FILE = process.env['LOG_ERROR_FILE'] ?? './logs/errors.log';
const LOG_REQUEST_FILE = process.env['LOG_REQUEST_FILE'] ?? './logs/requests.log';

const POSTGRES_HOST = process.env['POSTGRES_HOST'] ?? 'localhost';
const POSTGRES_PORT = Number(process.env['POSTGRES_PORT']) ?? 5432;
const POSTGRES_DB = process.env['POSTGRES_DB'] ?? 'postgres';
const POSTGRES_USER = process.env['POSTGRES_USER'] ?? 'postgres';
const POSTGRES_PASSWORD = process.env['POSTGRES_PASSWORD'] ?? 'postgres';
const POSTGRES_SYNCHRONIZE = process.env['POSTGRES_SYNCHRONIZE'] === 'true';
const POSTGRES_MIGRATION_RUN = process.env['POSTGRES_MIGRATION_RUN'] === 'true';
const POSTGRES_LOGGING = process.env['POSTGRES_LOGGING'] === 'true';

export { 
  PORT,
  NODE_ENV,
  AUTH_MODE,
  USE_FASTIFY,
  JWT_SECRET_KEY,
  LOGGING_SUPPRESS,
  LOG_INFO_FILE,
  LOG_ERROR_FILE,
  LOG_REQUEST_FILE,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_SYNCHRONIZE,
  POSTGRES_MIGRATION_RUN,
  POSTGRES_LOGGING
};
