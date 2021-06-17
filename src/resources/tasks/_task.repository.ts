// /**
//  * Task repository
//  * @module taskRepository
//  */

// import * as dataBase from '../../utils/inMemoryDb.js';
// import {Table, Entity } from '../../utils/inMemoryDb.js';
// import { NOT_FOUND_ERROR } from '../../errors/httpError404.js';

// const TABLE_NAME = 'Tasks';
// const ENTITY_NAME = 'task';

// /**
//  * Function gets entities from Task table matched by specified Board
//  */
// const getAllFromBoard = async (boardId: string): Promise<Table> => {
//   const items = await dataBase.getEntitiesByField(TABLE_NAME, 'boardId', boardId);
//   if (!items.length) {
//     throw new NOT_FOUND_ERROR(`Couldn't find any ${ENTITY_NAME} on the board ${boardId} `);
//   }
//   return items;
// };

// /**
//  * Function gets an entity from the Task table for specified Board, by ID
//  */
// const getFromBoardById = async (boardId: string, id: string): Promise<Entity> => {
//   const items = await getAllFromBoard(boardId);
//   const item = items.find(obj => obj['id'] === id);
//   if (!item) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
//   }
//   return item;
// };

// /**
//  * Function adds the entity into the Tasks table
//  */
// const addEntity = async (entity: Entity): Promise<Entity> => dataBase.addEntity(TABLE_NAME, entity);

// /**
//  * Function updates an entity in the Tasks table by specified identifier
//  */
// const updateById = async (id: string, entity: Entity): Promise<Entity> => {
//   const item = await dataBase.updateEntityByField(TABLE_NAME, 'id', id, entity);
//   if (!item) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
//   }
//   return item;
// };

// /**
//  * Function deletes an entity from Tasks table by specified identifier
//  */
// const deleteById = async (id: string): Promise<void> => {
//   if (! await dataBase.deleteEntityByField(TABLE_NAME, 'id', id)) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
//   } 
// };

// /**
//  * Function deletes all entities from Tasks table for specified Board
//  */
// const deleteAllFromBoard = async (boardId: string): Promise<void> => {
//   await dataBase.deleteEntitiesByField(TABLE_NAME, 'boardId', boardId);
// };

// /**
//  * Function updates all entities in the Tasks table matched by specified pattern
//  */
// const updateByMatch = async (pattern: Entity, update: Entity): Promise<void> => {
//   await dataBase.updateEntitiesByPattern(TABLE_NAME, pattern, update);
// };

// export { getAllFromBoard, getFromBoardById, addEntity, updateById, deleteById, deleteAllFromBoard, updateByMatch };
