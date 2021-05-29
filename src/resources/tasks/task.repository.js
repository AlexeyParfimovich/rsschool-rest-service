/**
 * Task repository
 * @module taskRepository
 */

import * as dataBase from '../../utils/inMemoryDb.js';
import { NOT_FOUND_ERROR } from '../../errors/httpError404.js';

/**
 * @const {string}
 */
const TABLE_NAME = 'Tasks';
/**
 * @const {string}
 */
const ENTITY_NAME = 'task';

/**
 * Function to get all entities from Task table by specified Board
 * @param {string} boardId - Board identifier
 * @returns {Promise<Array.<Object>>} Array of all objects from the table
 */
const getAllFromBoard = async (boardId) => {
  const items = await dataBase.getEntitiesByField(TABLE_NAME, 'boardId', boardId);
  if (!items.length) {
    throw new NOT_FOUND_ERROR(`Couldn't find any ${ENTITY_NAME} on the board ${boardId} `);
  }
  return items;
}

/**
 * Function to get an entity from Task table for specified Board
 * @param {string} boardId - Board identifier
 * @param {string} taskId - Task identifier
 * @returns {Promise<Object.<string,string>>} An object selected by id
 */
const getFromBoardById = async (boardId, id) => {
  const items = await getAllFromBoard(boardId);
  const item = items.find(obj => obj.id === id);
  if (!item) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }
  return item;
};

/**
 * Function for adding an entity into the Tasks table
 * @param {Object.<string, string>} entity - Object for adding
 * @returns {Promise<Object.<string,string>>} An object added to the table
 */
const addEntity = async (entity) => dataBase.addEntity(TABLE_NAME, entity);

/**
 * Function for updating an entity in the Tasks table by specified identifier
 * @param {string} taskId - Task identifier
 * @param {Object.<string, string>} entity - Object for updating
 * @returns {Promise<Object.<string,string>>} An object updated in the table
 */
const updateById = async (id, entity) => {
  const item = await dataBase.updateEntityByField(TABLE_NAME, 'id', id, entity);
  if (!item) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }
  return item;
};

/**
 * Function to deleting all an entity from Tasks table by specified identifier
 * @param {string} taskId - Task identifier
 * @returns {Promise<void>}
 */
const deleteById = async (id) => {
  if (! await dataBase.deleteEntityByField(TABLE_NAME, 'id', id)) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  } 
};

/**
 * Function to deleting all an entity from Tasks table for specified Board
 * @param {string} boardId - Board identifier
 * @returns {Promise<void>}
 */
const deleteAllFromBoard = async (boardId) => {
  await dataBase.deleteEntitiesByField(TABLE_NAME, 'boardId', boardId);
};

/**
 * Function to update all Tasks matched by specified pattern
 * @param {Object.<string,string>} pattern - Set of attributes as a pattern for compare
 * @param {Object.<string,string>} update - Set of attributes for updating object that match the specified pattern
 * @returns {Promise<void>}
 */
const updateByMatch = async (pattern, update) => {
  await dataBase.updateEntitiesByPattern(TABLE_NAME, pattern, update);
};

export { getAllFromBoard, getFromBoardById, addEntity, updateById, deleteById, deleteAllFromBoard, updateByMatch };
