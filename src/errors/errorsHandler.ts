/**
 * Error-handling middleware function
 * @module errorHandler
 */

import { Request, Response, NextFunction } from 'express';
import { CLIENT_ERROR } from './httpErrors.js';

/**
 * Middleware function to handle custom errors
 */
export default function handler(err: Error, _req: Request, res: Response, next: NextFunction): void {
  if (err instanceof CLIENT_ERROR) {
    res.status(err.status).send(err.message);
  } else if (err) {
    res.sendStatus(500);
  }
  next();
};