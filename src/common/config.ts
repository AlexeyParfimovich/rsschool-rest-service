import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();

dotenv.config({
  path: path.join(__dirname, './.env')
});

const NODE_ENV = process.env['NODE_ENV'] ?? 'development';
const PORT = process.env['PORT'] ?? 4000;
const AUTH_MODE = process.env['AUTH_MODE'] === 'true';
const LOGGING_SUPPRESS = process.env['LOGGING_SUPPRESS'] === 'true';
const LOG_INFO_FILE = process.env['LOG_INFO_FILE'] ?? './logs/info.log';
const LOG_ERROR_FILE = process.env['LOG_ERROR_FILE'] ?? './logs/errors.log';
const LOG_REQUEST_FILE = process.env['LOG_REQUEST_FILE'] ?? './logs/requests.log';

const { JWT_SECRET_KEY, DB_CONNECTION } = process.env;

export { 
  PORT,
  NODE_ENV,
  AUTH_MODE,
  DB_CONNECTION,
  JWT_SECRET_KEY,
  LOGGING_SUPPRESS,
  LOG_INFO_FILE,
  LOG_ERROR_FILE,
  LOG_REQUEST_FILE
};
