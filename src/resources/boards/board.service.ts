/**
 * Board service
 * @module boardService
 */

import * as boards from './board.repository.js';
import {Table, Entity } from '../../utils/inMemoryDb.js';
import {deleteByBoard as deleteAllTasks } from '../tasks/task.service.js';

/**
 * Function gets all entities from the Boards table
 */
const getAll = async (): Promise<Table> => boards.getAll();

/**
 * Function gets an entity from the Boards table by specified identifier
 */
const getById = async (id: string): Promise<Entity> => boards.getById(id);

/**
 * Function deletes an entity from Boards table by specified identifier
 */
const deleteById = async (id: string): Promise<void> => {
  await boards.deleteById(id);
  await deleteAllTasks(id);
};

/**
 * Function adds an entity into the Boards table
 */
const addEntity = async (entity: Entity): Promise<Entity> => boards.addEntity(entity);

/**
 * Function updates an entity in the Boards table by specified identifier
 */
const updateById = (id: string, entity: Entity): Promise<Entity> => boards.updateById(id, entity);

export { 
  getAll,
  getById,
  addEntity,
  updateById,
  deleteById 
};
