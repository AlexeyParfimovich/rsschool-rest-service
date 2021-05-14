const tasks = require('./task.memory.repository');

const getAll = (boardId) => tasks.getAll(boardId);

const getById = (boardId, id) => tasks.getById(boardId, id);

const addEntity = async (entity) => tasks.addEntity(entity);

const updateById = async (boardId, id, entity) => tasks.updateById(id, entity)

const deleteById = async (boardId, id) => {
  // await boardService.getById(boardId);
  await tasks.deleteById(id);
};

/*
  TODO: Implement logic when somebody DELETEs User or Board
*/
const deleteByBoard = async (boardId) => tasks.deleteByBoard(boardId);

const updateByMatch = (pattern, update) => tasks.updateByMatch(pattern, update);

module.exports = { getAll, getById, addEntity, updateById, updateByMatch, deleteById, deleteByBoard };
