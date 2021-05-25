const users = require('./user.repository');
const updateTasks = require('../tasks/task.service').updateByMatch;

/**
 * 
 * @returns 
 */
const getAll = () => users.getAll();

/**
 * 
 * @param {*} id 
 * @returns 
 */
const getById = (id) => users.getById(id);

/*
  TODO: When somebody DELETEs User, all Tasks where User is assignee should be updated to put userId = null
*/

/**
 * 
 * @param {*} id 
 */
const deleteById = async (id) => {
  await users.deleteById(id);
  await updateTasks({userId: id}, {userId: null});
}

/**
 * 
 * @param {*} entity 
 * @returns 
 */
const addEntity = (entity) => users.addEntity(entity);

/**
 * 
 * @param {*} id 
 * @param {*} entity 
 * @returns 
 */
const updateById = (id, entity) => users.updateById(id, entity);

module.exports = { getAll, getById, addEntity, updateById, deleteById };
