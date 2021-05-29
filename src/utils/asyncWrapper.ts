/**
 * Wrap the try/catch into a Promise
 * @module asyncWrapper
 */

import { Request, Response, NextFunction } from 'express';

type cbFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

/**
 * Function to wrap the try/catch into a Promise for any Express handler
 * @see https://zellwk.com/blog/async-await-express/
 */
export default function asyncWrapper(callback: cbFunction): cbFunction {
  return (req, res, next) => callback(req, res, next).catch(next);
};