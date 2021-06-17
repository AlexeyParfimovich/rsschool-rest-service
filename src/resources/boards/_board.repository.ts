// /**
//  * Board repository
//  * @module boardRepository
//  */

// import * as dataBase from '../../utils/inMemoryDb.js';
// import {Table, Entity } from '../../utils/inMemoryDb.js';
// import { NOT_FOUND_ERROR } from '../../errors/httpError404.js';

// const TABLE_NAME = 'Boards';
// const ENTITY_NAME = 'board';

// /**
//  * Function to get all entities from Boards table
//  */
// const getAll = async (): Promise<Table> => dataBase.getAllEntities(TABLE_NAME);

// /**
//  * Function gets an entity from Boards table by specified identifier
//  */
// const getById = async (id: string): Promise<Entity> => {
//   const item = await dataBase.getEntityByField(TABLE_NAME, 'id', id);
//   if (!item || Object.keys(item).length === 0) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
//   }
//   return item;
// };

// /**
//  * Function adds the entity into the Boards table
//  */
// const addEntity = async (entity: Entity): Promise<Entity> => dataBase.addEntity(TABLE_NAME, entity);

// /**
//  * Function updates an entity in the Boards table by specified identifier
//  */
// const updateById = async (id: string, entity: Entity): Promise<Entity> => {
//   const item = await dataBase.updateEntityByField(TABLE_NAME, 'id', id, entity);
//   if (!item) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
//   }
//   return item;
// };

// /**
//  * Function to deleting all an entity from Boards table by specified identifier
//  */
// const deleteById = async (id: string): Promise<void> => {
//   if (! await dataBase.deleteEntityByField(TABLE_NAME, 'id', id)) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
//   } 
// };

// export { getAll, getById, addEntity, updateById, deleteById };
