/**
 * Error-handling middleware function
 * @module error.handler
 */

/**
 * @type {Object}
 */
const { CLIENT_ERROR } = require('./clientError');

/**
 * function to handle custom errors
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {void}
 */
function handler(err, req, res, next) {
  if (err instanceof CLIENT_ERROR) {
    // console.log('Возникла ошибка: ', err);
    res.status(err.status).send(err.message);
  } else if (err) {
    res.sendStatus(500);
  }
  next();
};

module.exports = handler ;