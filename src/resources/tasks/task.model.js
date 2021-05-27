/**
 * Task model
 * @module taskModel
 */

const uuid = require('uuid').v1;

/**
 * Object received from DB
 * @typedef {Object} ObjDB
 * @prop {string} id - Task identifier
 * @prop {string} title - Task title
 * @prop {string} order - Task order
 * @prop {string} description - Task description 
 * @prop {string} userId - User identifier
 * @prop {string} boardId - Board identifier
 * @prop {string} columnId - Column identifier
 */

/**
 * Object received from http request
 * @typedef {Object} ObjJSON
 * @prop {string=} id - Task identifier
 * @prop {string=} title - Task title
 * @prop {string=} order - Task order
 * @prop {string=} description - Task description 
 * @prop {string=} userId - User identifier
 * @prop {string=} boardId - Board identifier
 * @prop {string=} columnId - Column identifier
 */

/**
 * Class to create a Task object
 */
class Task {
  /**
   * @param {ObjJSON} task - Task information obtained from the request
   */
  constructor({
    id = uuid(),
    title = 'Default task',
    order = '1',
    description = '',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    /** 
     * Task identifier
     *  @type {string}
     */
    this.id = id;
    /** 
     * Task title
     * @type {string}
     */
    this.title = title;
    /** 
     * Task order
     * @type {string}
     */
    this.order = order;
    /** 
     * Task description 
     * @type {string}
     */
    this.description = description;
    /** 
     * User identifier
     * @type {string}
     */
    this.userId = userId;
    /** 
     * Board identifier
     * @type {string}
     */
    this.boardId = boardId;
    /** 
     * Column identifier
     * @type {string}
     */
    this.columnId = columnId
  }

  /**
   * Static method to filter off some attributes
   * @param {ObjDB} task - Task object from DB
   * @returns {ObjJSON} Set of Task attributes without filtered attributes
   * @static
   */
  static toRes(task) {
    return task;
  }

  /**
   * Static method to create, initiate and return new Task
   * @param {string} boardId - Board identifier
   * @param {ObjJSON} body - Request body contains Task attributes
   * @returns {ObjDB} Task object
   * @static
   */
  static fromReq(boardId, body) {
    const task = new Task(body);
    task.boardId = boardId;
    return task;
  }
  
}

module.exports = Task;
