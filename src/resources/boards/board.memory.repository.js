const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');
// const { BAD_REQUEST_ERROR } = require('../../errors/badRequestError');

const ENTITY_NAME = 'board';
const data = [];

const getAll = async () => data;

const getById = async (id) => {
  const item = data.find((obj) => obj.id === id);
   
  if (!item) {
    throw new NOT_FOUND_ERROR(`The ${ENTITY_NAME} with ID: ${id} doesn't exist `);
  }
  return item;
};

const addEntity = async (entity) => { 
  const len = data.push(entity);
  return data[len-1];
};

const updateById = async (id, entity) => {
  const index = data.findIndex((obj) => obj.id === id);

  if (index < 0) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }

  Object.keys(entity).forEach((key) => {
    if(key in data[index]) { 
      data[index][key] = entity[key];
    }
  });
  return data[index];
};

const deleteById = async (id) => {
  const index = data.findIndex((obj) => obj.id === id);

  if (index < 0) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  } 
  data.splice(index, 1);
};

module.exports = { getAll, getById, addEntity, updateById, deleteById };
