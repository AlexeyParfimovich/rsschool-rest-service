/**
 * Class of the http-error 404 "Not found"
 * @module httpError404
*/

import { CLIENT_ERROR } from './httpErrors.js';

/**
 * Class of the http-error 404
 * @extends CLIENT_ERROR
 */
class NOT_FOUND_ERROR extends CLIENT_ERROR {
  /**
   * @param {string} message - Error message
   */
  constructor(message) {
    super(`Bad Request. ${message}`);
    /**
     * Error status code
     * @type {string}
     */
    this.status = '404';
  }
};

export { NOT_FOUND_ERROR };