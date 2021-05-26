/**
 * Template for http-client errors
 * @module clientError
 */

/**
 * Class of http-client errors
 */
class CLIENT_ERROR extends Error {
  /**
   * @param {string} message - Error message
   */
  constructor(message) {
    super(message);
    /**
     * @type {string}
     */
    this.name = this.constructor.name;
  }
};

module.exports = { CLIENT_ERROR };