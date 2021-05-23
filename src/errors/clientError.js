/*
  Template for http-client-errors class
*/
class CLIENT_ERROR extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
};

module.exports = { CLIENT_ERROR };