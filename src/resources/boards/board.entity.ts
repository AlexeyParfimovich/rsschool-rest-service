/**
 * Board model
 * @module boardModel
 */

import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v1 as uuid } from 'uuid';

/**
 * Class to create a Board object
 */
@Entity()
export class Board {

  @PrimaryColumn()
  id: string; // Board identifier

  @Column()
  title: string; // Board title

  @Column('jsonb', {nullable: true})
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
  // static toRes(board: Board): Board {
  //   return board;
  // }

  /**
   * Static method to create, initiate and return new Board
   */
  // static fromReq(reqBody: Entity): Entity {
  //   return { ...new Board(reqBody) };
  // } 
}