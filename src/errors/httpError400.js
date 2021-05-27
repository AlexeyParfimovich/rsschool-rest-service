/**
 * Class of the http-error 400 "Bad request"
 * @module httpError400
 */

const { CLIENT_ERROR } = require('./httpErrors');

/**
 * Class of the http-error 400
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