/*
  Custom classe for 400 "bad request" http-client-errors
*/
const { CLIENT_ERROR } = require('./clientError');

class BAD_REQUEST_ERROR extends CLIENT_ERROR {
  constructor(message) {
    super(`Bad Request. ${message}`);
    this.status = 400;
  }
};

module.exports = { BAD_REQUEST_ERROR };