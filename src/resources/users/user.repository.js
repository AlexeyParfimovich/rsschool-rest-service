const dataBase = require('../../utils/inMemoryDb');

const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');
// const { BAD_REQUEST_ERROR } = require('../../errors/badRequestError');

const TABLE_NAME = 'Users';
const ENTITY_NAME = 'user';

const getAll = async () => dataBase.getAllEntities(TABLE_NAME);

const getById = async (id) => {
  const item = await dataBase.getEntityById(TABLE_NAME, id);
  if (!item) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }
  return item;
};

const addEntity = async (entity) => dataBase.addEntity(TABLE_NAME, entity);

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

module.exports = { getAll, getById, addEntity, updateById, deleteById };
