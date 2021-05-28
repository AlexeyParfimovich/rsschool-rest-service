/**
 * Task service
 * @module taskService
 */

import * as tasks from './task.repository.js';

/**
 * Function to get all entities from Tasks table for specified Board
 * @param {string} boardId - Board identifier
 * @returns {Promise<Array.<Object.<string,string>>>} Array of tasks
 */
const getAll = async (boardId) => tasks.getAllFromBoard(boardId);

/**
 * Function to get an entity from Task table for specified Board
 * @param {string} boardId - Board identifier
 * @param {string} taskId - Task identifier
 * @returns {Promise<Object.<string,string>>} An object selected by id
 */
const getById = async (boardId, id) => tasks.getFromBoardById(boardId, id);

/**
 * Function for adding an entity into the Tasks table
 * @param {Object.<string, string>} entity - Object for adding
 * @returns {Promise<Object.<string,string>>} An object added to the table
 */
const addEntity = async (entity) => tasks.addEntity(entity);

/**
 * Function for updating an entity in the Tasks table by specified identifier
 * @param {string} boardId - Board identifier
 * @param {string} taskId - Task identifier
 * @param {Object.<string, string>} entity - Object for updating
 * @returns {Promise<Object.<string,string>>} An object updated in the table
 */
const updateById = async (boardId, id, entity) => tasks.updateById(id, entity)

/**
 * Function to deleting all an entity from Tasks table by specified identifier
 * @param {string} boardId - Board identifier
 * @param {string} taskId - Task identifier
 * @returns {Promise<void>}
 */
const deleteById = async (boardId, id) => {
  // await boardService.getById(boardId);
  await tasks.deleteById(id);
};

/**
 * Function to deleting all an entity from Tasks table for specified Board
 * @param {string} boardId - Board identifier
 * @returns {Promise<void>}
 */
const deleteByBoard = async (boardId) => tasks.deleteAllFromBoard(boardId);

/**
 * Function to update all Tasks matched by specified pattern
 * @param {Object.<string,string>} pattern - Set of attributes as a pattern for compare
 * @param {Object.<string,string>} update - Set of attributes for updating object that match the specified pattern
 * @returns {Promise<void>}
 */
const updateByMatch = (pattern, update) => tasks.updateByMatch(pattern, update);

export { getAll, getById, addEntity, updateById, updateByMatch, deleteById, deleteByBoard };
