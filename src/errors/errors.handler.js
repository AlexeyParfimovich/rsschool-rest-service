/*
  Custom error-handling middleware function
*/
const { CLIENT_ERROR } = require('./clientError');
// const { NOT_FOUND_ERROR } = require('./notFoundError');

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