const dataBase = require('../../utils/inMemoryDb');

const { NOT_FOUND_ERROR } = require('../../errors/httpError404');

const TABLE_NAME = 'Boards';
const ENTITY_NAME = 'board';

const getAll = async () => dataBase.getAllEntities(TABLE_NAME);;

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
