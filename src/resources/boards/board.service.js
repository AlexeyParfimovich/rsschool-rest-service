/**
 * Board service
 * @module boardService
 */

const boards = require('./board.repository');
const deleteAllTasks = require('../tasks/task.service').deleteByBoard;

/**
 * Function to get all entities from Boards table
 * @returns {Promise<Array.<Object.<string,string>>>} Array of boards
 */
const getAll = () => boards.getAll();

/**
 * Function to get all an entity from Boards table by specified identifier
 * @param {string} id - Board identifier
 * @returns {Promise<Object.<string,string>>} A board object
 */
const getById = (id) => boards.getById(id);

/**
 * Function to delete an entity from Boards table by specified identifier
 * @param {string} id - Board identifier
 * @returns {Promise<void>}
 */
const deleteById = async (id) => {
  await boards.deleteById(id);
  await deleteAllTasks(id);
};

/**
 * Function for adding an entity into the Boards table
 * @param {Object.<string, string>} entity - Object for adding
 * @returns {Promise<Object.<string,string>>} A board object added
 */
const addEntity = (entity) => boards.addEntity(entity);

/**
 * Function for updating an entity in the Boards table by specified identifier
 * @param {string} id - Board identifier
 * @param {Object.<string, string>} entity - Object for updating
 * @returns {Promise<Object.<string,string>>} A board object updated
 */
const updateById = (id, entity) => boards.updateById(id, entity);

module.exports = { getAll, getById, addEntity, updateById, deleteById };
