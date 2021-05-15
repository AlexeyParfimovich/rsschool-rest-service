const dataBase = require('../../utils/inMemoryDb');

const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');
// const { BAD_REQUEST_ERROR } = require('../../errors/badRequestError');

const TABLE_NAME = 'Tasks';
const ENTITY_NAME = 'task';

const getAllFromBoard = async (boardId) => {
  const items = await dataBase.getAllByField(TABLE_NAME, 'boardId', boardId);
  if (!items.length) {
    throw new NOT_FOUND_ERROR(`Couldn't find any ${ENTITY_NAME} on the board ${boardId} `);
  }
  return items;
}

const getFromBoardById = async (boardId, id) => {
  const items = await getAllFromBoard(boardId);
  const item = items.find(obj => obj.id === id);
  if (!item) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }
  return item;
};

const addEntity = async (entity) =>dataBase.addEntity(TABLE_NAME, entity);

const updateById = async (id, entity) => {
  const item = await dataBase.updateEntity(TABLE_NAME, id, entity);
  if (!item) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }
  return item;
};

const deleteById = async (id) => {
  if (! await dataBase.deleteEntity(TABLE_NAME, id)) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  } 
};

const deleteAllFromBoard = async (boardId) => {
  await dataBase.deleteAllByField(TABLE_NAME, 'boardId', boardId);
};

const updateByMatch = async (pattern, update) => {
  await dataBase.updateAllByPattern(TABLE_NAME, pattern, update);
};

module.exports = { getAllFromBoard, getFromBoardById, addEntity, updateById, deleteById, deleteAllFromBoard, updateByMatch };
