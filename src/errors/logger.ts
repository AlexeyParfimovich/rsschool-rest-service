/**
 * Winston logger for logging errors end http-requests to log files
 * @module logger
 */

import winston from 'winston';
import { NODE_ENV, LOGGING_SUPPRESS, LOG_ERROR_FILE, LOG_REQUEST_FILE } from '../common/config.js';

const {createLogger, format, transports} = winston;

/**
 * Function allows log messages only if they have { httpReq: true }
 */
const allowHttpReq = format((info) => {
  if (!info['httpReq']) { 
    return false; 
  }
  return info;
}); 

/**
 * Custom format for log messages
 */
const customFormat = format.printf(({ message, timestamp }) => `${timestamp} ${message}`);

/**
 * Create Winston logger instance
 */
export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // format.errors({ stack: true }),
    // format.splat(),
    format.json(),
    customFormat,
  ),
  silent: LOGGING_SUPPRESS,
  defaultMeta: { service: 'rsschool-rest-service' },
});

/**
 * Add errors transport to logger
 */
logger.add( new transports.File({ 
  level: 'error',
  filename: LOG_ERROR_FILE
}));

/**
 * Add info&request transport to logger
 */
logger.add( new transports.File({
  filename: LOG_REQUEST_FILE, 
  format: format.combine(allowHttpReq()) 
}));

if (NODE_ENV === 'development') {
  /**
   * Add console transport to logger
  */
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
};