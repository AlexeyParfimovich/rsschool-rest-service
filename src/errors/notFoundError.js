/**
 * 404 "not found" http-client errors
 * @module notFoundError
*/

const { CLIENT_ERROR } = require('./clientError');

/**
 * Class of 404 http-client error
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

module.exports = { NOT_FOUND_ERROR };