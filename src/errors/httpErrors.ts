/**
 * General class of client http-errors
 * @module httpErrors
 */

/**
 * Class of client http-errors
 */
class CLIENT_ERROR extends Error {
  status: number; // Error status code

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.status = 500;
  }
};

export { CLIENT_ERROR };