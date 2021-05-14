const users = require('./user.memory.repository');
const updateTasks = require('../tasks/task.service').updateByMatch;

const getAll = () => users.getAll();

const getById = (id) => users.getById(id);

/*
  TODO: When somebody DELETEs User, all Tasks where User is assignee should be updated to put userId = null
*/
const deleteById = async (id) => {
  await users.deleteById(id);
  await updateTasks({userId: id}, {userId: null});
}

const addEntity = (entity) => users.addEntity(entity);

const updateById = (id, entity) => users.updateById(id, entity);

module.exports = { getAll, getById, addEntity, updateById, deleteById };
