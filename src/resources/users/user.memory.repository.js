const { NOT_FOUND_ERROR } = require('../../errors/notFoundError');
// const { BAD_REQUEST_ERROR } = require('../../errors/badRequestError');

const ENTITY_NAME = 'user';
const data = [];

const getAll = async () => data;

const getById = async (id) => {
  const item = data.find((obj) => obj.id === id);
  
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
  const index = data.findIndex((obj) => obj.id === id);
  // console.log(`Получены данные ${entity}`);
  // console.log(`Получен ID ${id} - найден элемент с индексом ${index}`);

  if (index < 0) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  }

  Object.keys(entity).forEach((key) => {
    // console.log(`Проверка наличия свойства ${key}:`);
    if(key in data[index]) { 
      data[index][key] = entity[key];
      // console.log(`свойство ${key} найдено - присвоено значение ${entity[key]}`);
    }
  });
  // console.log(`Обновленный объект ${data[index]}:`);
  return data[index];
};

const deleteById = async (id) => {
  const index = data.findIndex((obj) => obj.id === id);
  // console.log(`Получен ID ${id} - найден элемент с индексом ${index}`);
  if (index < 0) {
    throw new NOT_FOUND_ERROR(`Couldn't find a ${ENTITY_NAME} with ID:${id} `);
  } 

  data.splice(index, 1);
  // console.log(`Массив после удаления:`, data);
};

module.exports = { getAll, getById, addEntity, updateById, deleteById };
