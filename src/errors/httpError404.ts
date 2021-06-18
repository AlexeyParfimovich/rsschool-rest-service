/**
 * Class of the http-error 404 "Not found"
 * @module httpError404
 */

import { StatusCodes, getReasonPhrase} from 'http-status-codes';
import { HTTP_ERROR } from './httpErrors';

/**
 * Class of the http-error 404
 */
class NOT_FOUND_ERROR extends HTTP_ERROR {
  constructor(message: string) {
    super(message || getReasonPhrase(StatusCodes.NOT_FOUND));
    this.status = StatusCodes.NOT_FOUND;
  }
};

export { NOT_FOUND_ERROR };