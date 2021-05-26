/**
 * 400 "bad request" http-client error
 * @module badRequestError
 */

const { CLIENT_ERROR } = require('./clientError');

/**
 * Class of 400 http-client errors
 * @extends CLIENT_ERROR
 */
class BAD_REQUEST_ERROR extends CLIENT_ERROR {
  /**
   * @param {string} message - Error message
   */
  constructor(message) {
    super(`Bad Request. ${message}`);
    /**
     * Error status code
     * @type {string}
     */
    this.status = '400';
  }
};

module.exports = { BAD_REQUEST_ERROR };