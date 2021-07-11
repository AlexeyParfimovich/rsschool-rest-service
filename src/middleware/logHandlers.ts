/**
 * Error-handling and request-logging middleware functions
 */

import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import { logger } from './logger';

/**
 * Middleware function to log unhandled rejection
 */
function unhandledRejectionLogger(event: Error): void {
  logger.log('error', `Unhandled rejection detected: ${event.stack}`,
   () => process.exit(1))
};

/**
 * Middleware function to log uncaught exception
 */
function uncaughtExceptionLogger(error: Error): void {
  logger.log('error', `Uncaught error captured: ${error.stack}`,
  () => process.exit(1))
};

/**
 * Middleware function to log http requests
 */
function httpRequestLogger(req: Request, res: Response, next: NextFunction): void {
  const { method, url } = req; 
  const start = Date.now(); // process.hrtime
  next();
  finished(req, res, () => {
    const { query, params, body } = req; 
    const ms = Date.now() - start;
    const {statusCode} = res;
    logger.log('info', `${method} ${url} query_params: ${JSON.stringify(query)} request_params: ${JSON.stringify(params)} request_body: ${JSON.stringify(body)} status_code: ${statusCode} [${ms}ms]`, { httpReq: true });
  })
};

export { unhandledRejectionLogger, uncaughtExceptionLogger, httpRequestLogger };