/**
 * Board repository
 * @module boardRepository
 */

import * as dataBase from '../../utils/inMemoryDb.js';
import { NOT_FOUND_ERROR } from '../../errors/httpError404.js';

/**
 * @const {string}
 */
const TABLE_NAME = 'Boards';
/**
 * @const {string}
 */
const ENTITY_NAME = 'board';

/**
 * Function to get all entities from Boards table
 * @returns {Promise<Array.<Object>>} Array of all objects from the table
 */
const getAll = async () => dataBase.getAllEntities(TABLE_NAME);;

/**
 * Function to get all an entity from Boards table by specified identifier
 * @param {string} id - Board identifier
 * @returns {Promise<Object.<string,string>>} An object selected by id
 */
const getById = async (id) => {
  const item = await dataBase.getEntityByField(TABLE_NAME, 'id', id);
  if (!item || Object.keys(item).length === 0) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }
  return item;
};

/**
 * Function for adding an entity into the Boards table
 * @param {Object.<string, string>} entity - Object for adding
 * @returns {Promise<Object.<string,string>>} An object added to the table
 */
const addEntity = async (entity) => dataBase.addEntity(TABLE_NAME, entity);

/**
 * Function for updating an entity in the Boards table by specified identifier
 * @param {string} id - Board identifier
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
 * Function to deleting all an entity from Boards table by specified identifier
 * @param {string} id - Board identifier
 * @returns {Promise<void>}
 */
const deleteById = async (id) => {
  if (! await dataBase.deleteEntityByField(TABLE_NAME, 'id', id)) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  } 
};

export { getAll, getById, addEntity, updateById, deleteById };
