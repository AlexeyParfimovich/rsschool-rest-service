/**
 * Class of the http-error 400 "Bad request"
 * @module httpError400
 */

import { StatusCodes, getReasonPhrase} from 'http-status-codes';
import { HTTP_ERROR } from './httpErrors.js';

/**
 * Class of the http-error 400
 */
class BAD_REQUEST_ERROR extends HTTP_ERROR {
  constructor(message: string) {
    super(message || getReasonPhrase(StatusCodes.BAD_REQUEST));
    this.status = StatusCodes.BAD_REQUEST;
  }
};

export { BAD_REQUEST_ERROR };