/**
 * Column model
 * @module columnModel
 * @deprecated
 */

const uuid = require('uuid').v1;

/**
 * Object received from DB
 * @typedef {Object} ObjDB
 * @prop {string} id - Column identifier
 * @prop {string} title - Column title
 * @prop {string} order - Column order
 */

/**
 * Object received from http request
 * @typedef {Object} ObjJSON
 * @prop {string=} id - Column identifier
 * @prop {string=} title - Column title
 * @prop {string=} order - Column order
 */

/**
 * Class to create a Board object
 */
class Column {
  /**
   * @param {ObjJSON} column - Column information obtained from the request
   */
  constructor({
    id = uuid(),
    title = 'Default column',
    order = '1'
  } = {}) {
    /** 
     * Column identifier
     * @type {string}
     */
    this.id = id;
    /** 
     * Column title
     * @type {string}
     */
    this.title = title;
    /** 
     * Column order
     * @type {string}
     */
    this.order = order;
  }

  /**
   * Static method to filter off some attributes
   * @param {ObjDB} column - Column object from DB
   * @returns {ObjJSON} Set of Column attributes without filtered attributes
   * @static
   */
  static toRes(column) {
    return column;
  }

  /**
   * Static method to create, initiate and return new Column
   * @param {ObjJSON} body - Request body contains Column attributes
   * @returns {ObjDB} Column object
   * @static
   */
  static fromReq(body) {
    return new Column(body);
  }
  
}

module.exports = Column;
