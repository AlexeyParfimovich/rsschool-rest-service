/**
 * Column model
 * @module columnModel
 * @deprecated
 */

import { v1 as uuid } from 'uuid';
import { Entity } from '../../utils/inMemoryDb.js';

/**
 * Class to create a Column object
 */
export class Column {
  id: string; // Column identifier

  title: string; // Column title

  order: string; // Column order

  constructor({
    id = uuid(),
    title = 'Default column',
    order = '1'
  }: Partial<Column> = {}) {

    this.id = id;
    this.title = title;
    this.order = order;
  }

  /**
   * Static method to filter off some attributes
   */
  static toRes(column: Entity): Entity {
    return column;
  }

  /**
   * Static method to create, initiate and return new Column
   */
  static fromReq(body: Entity): Entity {
    return { ...new Column(body)};
  }
  
}