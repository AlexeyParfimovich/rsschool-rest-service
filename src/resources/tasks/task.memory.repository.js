const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');
// const { BAD_REQUEST_ERROR } = require('../../errors/badRequestError');

const ENTITY_NAME = 'task';
const data = [];

const getAll = async (boardId) => {
  const subset = data.filter(obj => obj.boardId === boardId); 

  if (!subset.length) {
    throw new NOT_FOUND_ERROR(`Couldn't find any ${ENTITY_NAME} on the board ${boardId} `);
  }
  return subset;
}

const getById = async (boardId, id) => {
  const item = data.find(obj => obj.boardId === boardId && obj.id === id);
  
  if (!item) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }
  return item;
};

const addEntity = async (entity) => { 
  const len = data.push(entity);
  return data[len-1];
};

const updateById = async (id, entity) => {
  const index = data.findIndex(obj => obj.id === id);

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
  const index = data.findIndex(obj => obj.id === id);

  if (index < 0) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  } 
  data.splice(index, 1);
};

const deleteByBoard = async (boardId) => {
  for(let i = data.findIndex(obj => obj.boardId === boardId);
      i >= 0;
      i = data.findIndex(obj => obj.boardId === boardId)) { 
        data.splice(i, 1);
      }
};

const updateByMatch = async (pattern, update) => {
  data.forEach((item, index) => {
    if (Object.keys(pattern).every(key => item[key] === pattern[key])) {
      Object.keys(update).forEach(key => {
        if(key in data[index]) data[index][key] = update[key];
      })
  }});
};

module.exports = { getAll, getById, addEntity, updateById, deleteById, deleteByBoard, updateByMatch };
