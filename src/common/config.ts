import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();

dotenv.config({
  path: path.join(__dirname, './.env')
});

const {PORT} = process.env;
const {NODE_ENV} = process.env;
const {AUTH_MODE} = process.env;
const {DB_CONNECTION} = process.env;
const {JWT_SECRET_KEY} = process.env;
const {LOG_ERROR_FILE} = process.env;
const {LOG_INFO_FILE} = process.env;

export { 
  PORT,
  NODE_ENV,
  AUTH_MODE,
  DB_CONNECTION,
  JWT_SECRET_KEY,
  LOG_ERROR_FILE,
  LOG_INFO_FILE,
};
