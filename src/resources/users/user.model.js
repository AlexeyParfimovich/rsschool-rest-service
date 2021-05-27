/**
 * User model
 * @module userModel
 */

const uuid = require('uuid').v1;

/**
 * Object received from DB
 * @typedef {Object} ObjDB
 * @prop {string} id - User identifier
 * @prop {string} name - User name
 * @prop {string} login - User login
 * @prop {string} password - User password 
 */

/**
 * Object received from http request
 * @typedef {Object} ObjJSON
 * @prop {string=} id - User identifier
 * @prop {string=} name - User name
 * @prop {string=} login - User login
 * @prop {string=} password - User password 
 */

/**
 * Class to create a User object
 */
class User {
  /**
   * @param {ObjJSON} user - User information obtained from the request
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
   * Static method to filter off the password attribute
   * @param {ObjDB} user - User object from DB
   * @returns {ObjJSON} Set of User attributes without password
   * @static
   */
  static toRes(user) {
    const { id, name, login } = user;
    return { id, name, login };
  };

  /**
   * Static method to create, initiate and return new User
   * @param {ObjJSON} body - Request body contains User attributes
   * @returns {ObjDB} User object
   * @static
   */
  static fromReq(body) {
    return new User(body);
  };
  
}

module.exports = User;
