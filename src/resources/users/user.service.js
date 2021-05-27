/**
 * User service
 * @module userService
 */

const users = require('./user.repository');
const updateTasks = require('../tasks/task.service').updateByMatch;

/**
 * Function to get all entities from Users table
 * @returns {Promise<Array.<Object.<string,string>>>} Array of users
 */
const getAll = async () => users.getAll();

/**
 * Function to get all an entity from Users table by specified identifier
 * @param {string} id - User identifier
 * @returns {Promise<Object.<string,string>>} A user object
 */
const getById = async (id) => users.getById(id);

/**
 * Function to delete an entity from Users table by specified identifier
 * @param {string} id - User identifier
 * @returns {Promise<void>}
 */
const deleteById = async (id) => {
  await users.deleteById(id);
  await updateTasks({userId: id}, {userId: null});
}

/**
 * Function for adding an entity into the Users table
 * @param {Object.<string, string>} entity - Object for adding
 * @returns {Promise<Object.<string,string>>} A user object added
 */
const addEntity = async (entity) => users.addEntity(entity);

/**
 * Function for updating an entity in the Users table by specified identifier
 * @param {string} id - User identifier
 * @param {Object.<string, string>} entity - Object for updating
 * @returns {Promise<Object.<string,string>>} A user object updated
 */
const updateById = async (id, entity) => users.updateById(id, entity);

module.exports = { getAll, getById, addEntity, updateById, deleteById };
