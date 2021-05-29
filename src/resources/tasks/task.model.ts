/**
 * Task model
 * @module taskModel
 */

 import { v1 as uuid } from 'uuid';

/**
 * Object received from DB
 */
interface ITask {
  id?: string; // Task identifier
  title?: string; // Task title
  order?: string; // Task order
  description?: string; // Task description 
  userId?: string; // User identifier
  boardId?: string; // Board identifier
  columnId?: string; // Column identifier
};

/**
 * Class to create a Task object
 */
export class Task implements ITask {
  id: string; // Task identifier

  title: string; // Task title

  order: string; // Task order

  description: string; // Task description 

  userId?: string; // User identifier

  boardId?: string; // Board identifier

  columnId?: string; // Column identifier

  constructor({
    id = uuid(),
    title = 'Default task',
    order = '1',
    description = '',
    userId = undefined,
    boardId = undefined,
    columnId = undefined
  }: ITask = {}) {
    
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
  static toRes(task: ITask): ITask {
    return task;
  }

  /**
   * Static method to create, initiate and return new Task
   */
  static fromReq(boardId: string, body: ITask): ITask {
    const task = new Task(body);
    task.boardId = boardId;
    return task;
  }
  
}
