/*
  Custom classe for 400 "not found" http-client-errors
*/
const { CLIENT_ERROR } = require('./clientError');

class NOT_FOUND_ERROR extends CLIENT_ERROR {
  constructor(message) {
    super(`Bad Request. ${message}`);
    this.status = 400;
  }
};

module.exports = { NOT_FOUND_ERROR };