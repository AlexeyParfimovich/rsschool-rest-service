/**
 * User service
 * @module userService
 */

import * as users from './user.repository.js';
import {Table, Entity } from '../../utils/inMemoryDb.js';
import { updateByMatch as updateTasks } from '../tasks/task.service.js';

/**
 * Function gets all entities from the Users table
 */
const getAll = async (): Promise<Table> => users.getAll();

/**
 * Function gets an entity from the Users table by specified identifier
 */
const getById = async (id: string): Promise<Entity> => users.getById(id);

/**
 * Function deletes an entity from Users table by specified identifier
 */
const deleteById = async (id: string): Promise<void> => {
  await users.deleteById(id);
  await updateTasks({userId: id}, {userId: null});
}

/**
 * Function adds an entity into the Users table
 */
const addEntity = async (entity: Entity): Promise<Entity> => users.addEntity(entity);

/**
 * Function updates an entity in the Users table by specified identifier
 */
const updateById = async (id: string, entity: Entity): Promise<Entity> => users.updateById(id, entity);

export { getAll, getById, addEntity, updateById, deleteById };
