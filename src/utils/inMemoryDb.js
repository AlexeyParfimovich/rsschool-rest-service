/**
 * Implementation of a simplest in-memory DB 
 * @module inMemoryDB
 */

/**
 * A database record entity 
 * @typedef {Object.<string,string>} Entity
 */

/**
 * A database table
 * @typedef {Array.<Entity>} Table
 */

/**
 * In-memory database
 * @const {Object} Database
 * @prop {Table} Users - Table of User objects
 * @prop {Table} Boards - Table of User objects
 * @prop {Table} Tacks - Table of User objects
 */
const DB = {
  Users: [],
  Boards:[],
  Tasks: [],
};

/**
 * Function to select and return all objects from a specified table
 * @param {string} table - Table name to select data
 * @returns {Promise<Array.<Entity>>} Array of all object from the table
 */
async function getAllEntities(table) {
  return DB[table];
};

/**
 * Function to select and return objects filtered by specified field
 * @param {string} table - Table name to select data
 * @param {string} field - Field name for data filtering 
 * @param {string} value - Value to search for it
 * @returns {Promise<Array.<Entity>>} Array of requested objects
 */
async function getAllByField(table, field, value) {
  return DB[table].filter((item) => item[field] === value);
};

/**
 * Function for selecting and returning an object found at the specified ID
 * @param {string} table - Table name to select data
 * @param {string} id -  Object identifier value
 * @returns {Promise<Entity>} Requested object
 */
async function getEntityById(table, id) {
  return DB[table].find((obj) => obj.id === id);
};

/**
 * Function for adding an object to the database
 * @param {string} table - Table name to add data
 * @param {Entity} entity -  Object to add to the database
 * @returns {Promise<Entity>} Added object
 */
async function addEntity(table, entity) {
  const len = DB[table].push(entity);
  return DB[table][len-1];
};

/**
 * Function for adding an object to the database
 * @param {string} table - Table name to update data
 * @param {string} id -  Object identifier value
 * @param {Entity} entity -  Object of attributes to update the existed one
 * @returns {Promise<Entity>} Updated object
 */
async function updateEntity(table, id, entity) {
  const index = DB[table].findIndex((obj) => obj.id === id);
  
  if (index < 0) return null;

  Object.keys(entity).forEach((key) => {
    if(key in DB[table][index]) { 
      DB[table][index][key] = entity[key];
    }});
  return DB[table][index];
};

/**
 * Function to delete an object by a specified ID
 * @param {string} table - Table name to delete data
 * @param {string} id -  Object identifier value
 * @returns {Promise<Entity>} Deleted object
 */
async function deleteEntity(table, id) {
  const index = DB[table].findIndex((obj) => obj.id === id);

  if (index < 0) return null;

  return DB[table].splice(index, 1);
};

/**
 * Function to delete objects by specified value of specified field
 * @param {string} table - Table name to delete data
 * @param {string} field - Field name for data filtering 
 * @param {string} value - Value to search for it
 * @returns {Promise<void>}
 */
async function deleteAllByField(table, field, value) {
  for(let i = DB[table].findIndex(obj => obj[field] === value);
    i >= 0;
    i = DB[table].findIndex(obj => obj[field] === value)) { 
    DB[table].splice(i, 1);
  }
};

/**
 * Function to update all objects by specified pattern
 * @param {string} table - Table name to delete data
 * @param {Entity} pattern - Set of attributes as a pattern for compare
 * @param {Entity} update - Set of attributes for updating object that match the specified pattern
 * @returns {Promise<void>}
 */
async function updateAllByPattern(table, pattern, update) {
  DB[table].forEach((item, index) => {
    if (Object.keys(pattern).every(key => item[key] === pattern[key])) {
      Object.keys(update).forEach(key => {
        if(key in DB[table][index]) DB[table][index][key] = update[key];
      })
    }});
};

export { 
  getAllEntities,
  getAllByField,
  getEntityById,
  addEntity,
  updateEntity,
  updateAllByPattern,
  deleteEntity,
  deleteAllByField
};