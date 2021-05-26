const uuid = require('uuid').v1;

/**
 * Class to create a User object
 */
class User {
  /**
   * @param {{}} [userInfo] User information obtained from the request 
   */
  constructor({
    id = uuid(),
    name = 'Default User',
    login = 'user',
    password = 'P@ssw0rd'
  } = {}) {
    /** 
     * User identifier
     * @type {string}
     */
    this.id = id;
    /** 
     * User name 
     * @type {string}
     */
    this.name = name;
    /** 
     * User login 
     * @type {string}
     */
    this.login = login;
    /** 
     * User password 
     * @type {string}
     */
    this.password = password;
  };

  /**
   * Static method to filter off the password field
   * @param {{}} user 
   * @returns {{}}
   * @static
   */
  static toRes(user) {
    const { id, name, login } = user;
    return { id, name, login };
  };

  /**
   * Static method to create, initiate and return new User
   * @param {Object} body 
   * @returns {Object}
   * @static
   */
  static fromReq(body) {
    return new User(body);
  };
  
}

module.exports = User;
