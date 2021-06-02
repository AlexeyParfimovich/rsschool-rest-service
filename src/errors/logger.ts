import pkg from 'winston';
import { NODE_ENV, LOGGING_SUPPRESS, LOG_ERROR_FILE, LOG_REQUEST_FILE } from '../common/config.js';

const {createLogger, format, transports} = pkg;

// Function allows log messages only if they have { httpReq: true }
const allowHttpReq = format((info) => {
  if (!info['httpReq']) { return false; }
  return info;
}); 

export const logger = createLogger({
  silent: LOGGING_SUPPRESS,
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // format.errors({ stack: true }),
    // format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'rsschool-rest-service' },
  transports: [
    new transports.File({ level: 'error', filename: LOG_ERROR_FILE }),
    new transports.File({
      filename: LOG_REQUEST_FILE, 
      format: format.combine(allowHttpReq()) 
    })
  ]
});

if (NODE_ENV === 'development') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
}