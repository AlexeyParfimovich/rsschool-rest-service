const tasks = require('./task.repository');

const getAll = (boardId) => tasks.getAllFromBoard(boardId);

const getById = (boardId, id) => tasks.getFromBoardById(boardId, id);

const addEntity = async (entity) => tasks.addEntity(entity);

const updateById = async (boardId, id, entity) => tasks.updateById(id, entity)

const deleteById = async (boardId, id) => {
  // await boardService.getById(boardId);
  await tasks.deleteById(id);
};

/*
  TODO: Implement logic when somebody DELETEs User or Board
*/
const deleteByBoard = async (boardId) => tasks.deleteAllFromBoard(boardId);

const updateByMatch = (pattern, update) => tasks.updateByMatch(pattern, update);

module.exports = { getAll, getById, addEntity, updateById, updateByMatch, deleteById, deleteByBoard };
