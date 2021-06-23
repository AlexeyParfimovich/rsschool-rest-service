/**
 * General class of client http-errors
 * @module httpErrors
 */
 
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

/**
 * Class of client http-errors
 */
class HTTP_ERROR extends Error {
  status: StatusCodes;

  constructor(
    status = StatusCodes.INTERNAL_SERVER_ERROR, 
    message = getReasonPhrase(status)) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
};

export { HTTP_ERROR };