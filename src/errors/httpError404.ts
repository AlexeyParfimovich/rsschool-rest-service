/**
 * Class of the http-error 404 "Not found"
 * @module httpError404
*/

import { CLIENT_ERROR } from './httpErrors.js';

/**
 * Class of the http-error 404
 */
class NOT_FOUND_ERROR extends CLIENT_ERROR {
  status: number; // Error status code

  constructor(message: string) {
    super(`Bad Request. ${message}`);
    this.status = 404;
  }
};

export { NOT_FOUND_ERROR };