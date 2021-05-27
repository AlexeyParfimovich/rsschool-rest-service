/**
 * Error-handling middleware function
 * @module errorHandler
 */

const { CLIENT_ERROR } = require('./httpErrors');

/**
 * Middleware function to handle custom errors
 * @param {{}} err - Object of error
 * @param {{}} req - Request
 * @param {{}} res - Response
 * @param {function} next 
 * @returns {void}
 */
function handler(err, req, res, next) {
  if (err instanceof CLIENT_ERROR) {
    res.status(err.status).send(err.message);
  } else if (err) {
    res.sendStatus(500);
  }
  next();
};

module.exports = handler ;