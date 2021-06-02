import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();

dotenv.config({
  path: path.join(__dirname, './.env')
});

const { 
  PORT,
  NODE_ENV,
  DB_CONNECTION,
  JWT_SECRET_KEY,
  LOG_INFO_FILE,
  LOG_ERROR_FILE,
  LOG_REQUEST_FILE
} = process.env;

const AUTH_MODE = process.env['AUTH_MODE'] === 'true';
const LOGGING_SUPPRESS = process.env['LOGGING_SUPPRESS'] === 'true';

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
