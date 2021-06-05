/**
 * Task service
 * @module taskService
 */

import * as tasks from './task.repository.js';
import { Table, Entity } from '../../utils/inMemoryDb.js';

/**
 * Function gets all entities from Tasks table for specified Board
 */
const getAll = async (boardId: string): Promise<Table> => tasks.getAllFromBoard(boardId);

/**
 * Function gets an entity from Task table for specified Board, by ID
 */
const getById = async (boardId: string, id: string): Promise<Entity> => tasks.getFromBoardById(boardId, id);

/**
 * Function adds an entity into the Tasks table
 */
const addEntity = async (entity: Entity): Promise<Entity> => tasks.addEntity(entity);

/**
 * Function updates an entity in the Tasks table by specified identifier
 */
const updateById = async (_boardId: string, id: string, entity: Entity): Promise<Entity> => tasks.updateById(id, entity)

/**
 * Function deletes an entity from Tasks table by specified identifier
 */
const deleteById = async (_boardId: string, id: string): Promise<void> => {
  // await boardService.getById(boardId);
  await tasks.deleteById(id);
};

/**
 * Function deletes all entity from Tasks table for specified Board
 */
const deleteByBoard = async (boardId: string): Promise<void> => tasks.deleteAllFromBoard(boardId);

/**
 * Function to update all Tasks matched by specified pattern
 */
const updateByMatch = (pattern: Entity, update: Entity): Promise<void> => tasks.updateByMatch(pattern, update);

export { getAll, getById, addEntity, updateById, updateByMatch, deleteById, deleteByBoard };
