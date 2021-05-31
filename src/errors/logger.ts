import pkg from 'winston';
import { LOG_ERROR_FILE, LOG_INFO_FILE } from '../common/config.js';

const {createLogger, format, transports} = pkg;

export const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.colorize(),
    format.cli(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: LOG_ERROR_FILE,
      level: 'error',
      format: format.combine(
        format.json()
      )
    }),
    new transports.File({
      filename: LOG_INFO_FILE,
      level: 'info',
      format: format.combine(
        format.json()
      )
    }),
  ]
});