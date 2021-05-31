/**
 * General class of client http-errors
 * @module httpErrors
 */
 
import { StatusCodes } from 'http-status-codes';

/**
 * Class of client http-errors
 */
class HTTP_ERROR extends Error {
  status = StatusCodes.INTERNAL_SERVER_ERROR; // Error status code

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
};

export { HTTP_ERROR };