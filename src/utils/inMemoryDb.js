/*
  Implementation of a simplest in-memory DB 
*/
const DB = {
  Users: [],
  Boards:[],
  Tasks: [],
};

async function getAllEntities(table) {
  return DB[table];
};

async function getAllByField(table, field, value) {
  return DB[table].filter((item) => item[field] === value);
};
// Эта функция дублирует предыдущую !
async function getEntityById(table, id) {
  return DB[table].find((obj) => obj.id === id);
};

async function addEntity(table, entity) {
  const len = DB[table].push(entity);
  return DB[table][len-1];
};

async function updateEntity(table, id, entity) {
  const index = DB[table].findIndex((obj) => obj.id === id);
  
  if (index < 0) return null;

  Object.keys(entity).forEach((key) => {
    if(key in DB[table][index]) { 
      DB[table][index][key] = entity[key];
  }});
  return DB[table][index];
};

async function deleteEntity(table, id) {
  const index = DB[table].findIndex((obj) => obj.id === id);

  if (index < 0) return null;

  return DB[table].splice(index, 1);
};

async function deleteAllByField(table, field, value) {
  for(let i = DB[table].findIndex(obj => obj[field] === value);
      i >= 0;
      i = DB[table].findIndex(obj => obj[field] === value)) { 
        DB[table].splice(i, 1);
      }
};

async function updateAllByPattern(table, pattern, update) {
  DB[table].forEach((item, index) => {
    if (Object.keys(pattern).every(key => item[key] === pattern[key])) {
      Object.keys(update).forEach(key => {
        if(key in DB[table][index]) DB[table][index][key] = update[key];
      })
  }});
};

module.exports = { 
  getAllEntities,
  getAllByField,
  getEntityById,
  addEntity,
  updateEntity,
  updateAllByPattern,
  deleteEntity,
  deleteAllByField
};