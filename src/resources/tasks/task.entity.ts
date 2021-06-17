/**
 * Task model
 * @module taskModel
 */

import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v1 as uuid } from 'uuid';

import { Board } from '../boards/board.entity.js';
import { User } from '../users/user.entity.js';

/**
 * Class to create a Task object
 */
@Entity()
export class Task {

  @PrimaryColumn()
  id: string; // Task identifier

  @Column()
  title: string; // Task title

  @Column()
  order: string; // Task order

  @Column()
  description: string; // Task description 

  @ManyToOne(_type => User, user => user.id)
  user: string | null; // User identifier

  @ManyToOne(_type => Board, board => board.id)
  board: string | null; // Board identifier

  @Column('varchar', {length: 50, nullable: true})
  column: string | null; // Column identifier

  constructor({
    id = uuid(),
    title = 'Default task',
    order = '1',
    description = 'none',
    user = null,
    board = null,
    column = null
  }: Partial<Task> = {}) {
    
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.user = user;
    this.board = board;
    this.column = column
  };

  /**
   * Static method to filter off some attributes
   */
  // static toRes(task: Entity): Entity {
  //   return task;
  // }

  // /**
  //  * Static method to create, initiate and return new Task
  //  */
  // static fromReq(boardId: string, reqBody: Entity): Entity {
  //   const task = new Task(reqBody);
  //   task.boardId = boardId;
  //   return { ...task };
  // }
}
