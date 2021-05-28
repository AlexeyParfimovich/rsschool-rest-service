/**
 * General class of client http-errors
 * @module httpErrors
 */

/**
 * Class of client http-errors
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

export { CLIENT_ERROR };