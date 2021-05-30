/**
 * Task model
 * @module taskModel
 */

 import { v1 as uuid } from 'uuid';
 import { Entity } from '../../utils/inMemoryDb.js';

/**
 * Object received from DB
 */
// interface ITask {
//   id?: string; // Task identifier
//   title?: string; // Task title
//   order?: string; // Task order
//   description?: string; // Task description 
//   userId?: string | null; // User identifier
//   boardId?: string | null; // Board identifier
//   columnId?: string | null; // Column identifier
// };

/**
 * Class to create a Task object
 */
export class Task {
  id: string; // Task identifier

  title: string; // Task title

  order: string; // Task order

  description: string; // Task description 

  userId: string | null; // User identifier

  boardId: string | null; // Board identifier

  columnId: string | null; // Column identifier

  constructor({
    id = uuid(),
    title = 'Default task',
    order = '1',
    description = '',
    userId = null,
    boardId = null,
    columnId = null
  }: Partial<Task> = {}) {
    
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId
  }

  /**
   * Static method to filter off some attributes
   */
  static toRes(task: Entity): Entity {
    return task;
  }

  /**
   * Static method to create, initiate and return new Task
   */
  static fromReq(boardId: string, reqBody: Entity): Entity {
    const task = new Task(reqBody);
    task.boardId = boardId;
    return { ...task };
  }
  
}
