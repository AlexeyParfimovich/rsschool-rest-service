/**
 * Error-handling and request-logging middleware functions
 * @module middleware
 */

import { StatusCodes, getReasonPhrase} from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';

import { HTTP_ERROR } from './httpErrors.js';
import { logger } from './logger.js';

/**
 * Middleware function to handle custom errors
 */
function errorHandler(err: Error, _req: Request, res: Response, next: NextFunction): void {
  if (err instanceof HTTP_ERROR) {
    res.status(err.status).send(err.message);
  } else if (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));
  }

  logger.log('error',err);
  next();
};

/**
 * Middleware function to log unhandled rejection
 */
function unhandledRejectionLogger(event: PromiseRejectionEvent):void {
  logger.log('error', `Unhandled rejection detected: ${event.reason}, ${event.promise}`);
  process.exit(1);
}

/**
 * Middleware function to log uncaught exception
 */
function uncaughtExceptionLogger(error: Error):Promise<void> {
  logger.log('error', `Uncaught error captured: ${error.message}`);
  process.exit(1);
}

/**
 * Middleware function to log http requests
 */
function httpRequestLogger(req: Request, res: Response, next: NextFunction): void {
  const start = Date.now(); // process.hrtime
  next();
  finished(req, res, () => {
    const {method, url, params, body } = req; 
    const ms = Date.now() - start;
    const {statusCode} = res;
    logger.log('info', `${method} ${url} query params: ${JSON.stringify(params)} body: ${JSON.stringify(body)} status code: ${statusCode} [${ms}ms]`, { httpReq: true });
  })
};

export { errorHandler, unhandledRejectionLogger, uncaughtExceptionLogger, httpRequestLogger };