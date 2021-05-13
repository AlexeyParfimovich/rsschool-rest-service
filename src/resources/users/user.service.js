const users = require('./user.memory.repository');

const getAll = () => users.getAll();

const getById = (id) => users.getById(id);

const deleteById = (id) => users.deleteById(id);

const addEntity = (entity) => users.addEntity(entity);

const updateById = (id, entity) => users.updateById(id, entity);

module.exports = { getAll, getById, addEntity, updateById, deleteById };
