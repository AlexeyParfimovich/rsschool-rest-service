/**
 * Implementation of a simplest in-memory DB 
 * @module inMemoryDB
 */

/**
 * Database record entity type
 */
type Entity = Record<string, string>;
/**
 * Database table type
 */
type Table = Array<Entity>;
/**
 * In-memory database type
 */
type Database = Record<string, Table>;
/**
 * In-memory database
 */
const DB: Database = {
  Users: [],
  Boards: [],
  Tasks: [],
};

const TABLE_NOT_FOUND: Table = [];
const ENTITY_NOT_FOUND: Entity = {};
const FIELD_NOT_FOUND = '';

/**
 * Function selects and returns all entities from the specified table
 */
async function getAllEntities(tableName: string): Promise<Table | null> {
  return DB[tableName] || null;
};

/**
 * Function selects and returns entities from the table by specified field
 */
async function getEntitiesByField(tableName: string, fieldName: string, fieldValue: string): Promise<Table | null> {
  const table = DB[tableName] || TABLE_NOT_FOUND;
  return table.filter(item => item[fieldName] === fieldValue);
};

/**
 * Function for selecting and returning an object found at the specified ID
 */
async function getEntityByField(tableName: string, fieldName = 'id', fieldValue: string): Promise<Entity | null> {
  const table = DB[tableName] || TABLE_NOT_FOUND;
  return table.find(item => item[fieldName] === fieldValue) || null;
};

/**
 * Function adds an entity to the specified table
 */
async function addEntity(tableName: string, entity: Entity): Promise<Entity | null> {
  const table = DB[tableName] || TABLE_NOT_FOUND;
  const len = table.push(entity);
  return table[len-1] || null;
};

/**
 * Function updates entity in the table by specified field
 */
async function updateEntityByField(tableName: string, fieldName = 'id', fieldValue: string, entity: Entity): Promise<Entity | null> {
  const table = DB[tableName] || TABLE_NOT_FOUND;
  const index = table.findIndex(item => item[fieldName] === fieldValue);
  
  if (index < 0) return null;

  Object.keys(entity).forEach((key) => {
    const record = table[index] || ENTITY_NOT_FOUND;
    if(key in record) { 
      record[key] = entity[key] || FIELD_NOT_FOUND;
    }});
  return table[index] || null;
};

/**
 * Function deletes an entity from the table by a specified field
 */
async function deleteEntityByField(tableName: string, fieldName = 'id', fieldValue: string): Promise<Entity | null> {
  const table = DB[tableName] || TABLE_NOT_FOUND;
  const index = table.findIndex(item => item[fieldName] === fieldValue);

  if (index < 0) return null;

  return table.splice(index, 1)[0] || null;
};

/**
 * Function deletes all entities from the table matched by specified field
 */
async function deleteEntitiesByField(tableName: string, fieldName: string, fieldValue: string): Promise<void> {
  const table = DB[tableName] || TABLE_NOT_FOUND;
  for(let i = table.findIndex(item => item[fieldName] === fieldValue);
    i >= 0;
    i = table.findIndex(item => item[fieldName] === fieldValue)) { 
    table.splice(i, 1);
  }
};

/**
 * Function updates all entities in the table matched by specified pattern
 */
async function updateEntitiesByPattern(tableName: string, pattern: Entity, update: Entity): Promise<void> {
  const table = DB[tableName] || TABLE_NOT_FOUND;
  table.forEach((item, index) => {
    if (Object.keys(pattern).every(key => item[key] === pattern[key])) {
      Object.keys(update).forEach(key => {
        const record = table[index] || ENTITY_NOT_FOUND;
        if(key in record) record[key] = update[key] || FIELD_NOT_FOUND;
      })
    }});
};

export { 
  addEntity,
  getAllEntities,
  getEntityByField,
  getEntitiesByField,
  deleteEntityByField,
  deleteEntitiesByField,
  updateEntityByField,
  updateEntitiesByPattern
};