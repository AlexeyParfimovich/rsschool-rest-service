/**
 * Error-handling and request-logging middleware functions
 * @module middleware
 */

import { HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import { logger } from './logger';

/**
 * Middleware function to handle custom errors
 */
function errorHandler(err: Error, _req: Request, res: Response, next: NextFunction): void {
  if (err instanceof HttpException) {
    logger.log('error',`${err.getStatus()} ${err.stack}`);  
    res.status(err.getStatus()).send(err.message);
  } else if (err) {
    logger.log('error',`${HttpStatus.INTERNAL_SERVER_ERROR} ${err.stack}`);  
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('INTERNAL_SERVER_ERROR');
  }

  next();
};

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

export { errorHandler, unhandledRejectionLogger, uncaughtExceptionLogger, httpRequestLogger };