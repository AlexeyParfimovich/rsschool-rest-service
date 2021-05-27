/**
 * Class of the http-error 404 "Not found"
 * @module httpError404
*/

const { CLIENT_ERROR } = require('./httpErrors');

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

module.exports = { NOT_FOUND_ERROR };