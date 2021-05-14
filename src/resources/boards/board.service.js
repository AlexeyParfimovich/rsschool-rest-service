const boards = require('./board.memory.repository');
const deleteAllTasks = require('../tasks/task.service').deleteByBoard;

const getAll = () => boards.getAll();

const getById = (id) => boards.getById(id);

const findById = (id) => boards.findById(id);

/*
  TODO: When somebody DELETEs Board, all its Tasks should be deleted as well.
*/
const deleteById = async (id) => {
  await boards.deleteById(id);
  await deleteAllTasks(id);
};

const addEntity = (entity) => boards.addEntity(entity);

const updateById = (id, entity) => boards.updateById(id, entity);

module.exports = { getAll, getById, findById, addEntity, updateById, deleteById };
