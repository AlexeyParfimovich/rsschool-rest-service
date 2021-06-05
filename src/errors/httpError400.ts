/**
 * Class of the http-error 400 "Bad request"
 * @module httpError400
 */

import { CLIENT_ERROR } from './httpErrors.js';

/**
 * Class of the http-error 400
 */
class BAD_REQUEST_ERROR extends CLIENT_ERROR {
  status: number; // Error status code

  constructor(message: string) {
    super(`Bad Request. ${message}`);
    this.status = 400;
  }
};

export { BAD_REQUEST_ERROR };