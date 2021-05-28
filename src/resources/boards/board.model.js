/**
 * Board model
 * @module boardModel
 */

import { v1 as uuid } from 'uuid';

/**
 * Object received from DB
 * @typedef {Object} ObjDB
 * @prop {string} id - Board identifier
 * @prop {string} title - Board title
 * @prop {Array.<Object.<string, string>>} columns - Array of columns
 */

/**
 * Object received from http request
 * @typedef {Object} ObjJSON
 * @prop {string=} id - Board identifier
 * @prop {string=} title - Board title
 * @prop {Array.<Object.<string, string>>=} columns - Array of columns
 */

/**
 * Class to create a Board object
 */
export class Board {
  /**
   * @param {ObjJSON} board - Board information obtained from the request
   */
  constructor({
    id = uuid(),
    title = 'Default board',
    columns = []
  } = {}) {
    /** 
     * Board identifier
     *  @type {string}
     */
    this.id = id;
    /** 
     * Board title
     * @type {string}
     */
    this.title = title;
    /** 
     * Columns
     * @type {Array.<Object.<string, string>>}
     */
    this.columns = columns;
  }

  /**
   * Static method to filter off some attributes
   * @param {ObjDB} board - Board object from DB
   * @returns {ObjJSON} Set of Board attributes without filtered attributes
   * @static
   */
  static toRes(board) {
    return board;
  }

  /**
   * Static method to create, initiate and return new Board
   * @param {ObjJSON} body - Request body contains Board attributes
   * @returns {ObjDB} Board object
   * @static
   */
  static fromReq(body) {
    return new Board(body);
  } 
}