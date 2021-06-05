/**
 * Board model
 * @module boardModel
 */

import { v1 as uuid } from 'uuid';
import { Entity } from '../../utils/inMemoryDb.js';

/**
 * Class to create a Board object
 */
export class Board {
  id: string; // Board identifier

  title: string; // Board title

  columns: []; // Set of Columns
  
  constructor({
    id = uuid(),
    title = 'Default board',
    columns = []
  }: Partial<Board> = {}) {

    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   * Static method to filter off some attributes
   */
  static toRes(board: Entity): Entity {
    return board;
  }

  /**
   * Static method to create, initiate and return new Board
   */
  static fromReq(reqBody: Entity): Entity {
    return { ...new Board(reqBody) };
  } 
}