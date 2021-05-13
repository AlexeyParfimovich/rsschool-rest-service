const boards = require('./board.memory.repository');

const getAll = () => boards.getAll();

const getById = (id) => boards.getById(id);

const deleteById = (id) => boards.deleteById(id);

const addEntity = (entity) => boards.addEntity(entity);

const updateById = (id, entity) => boards.updateById(id, entity);

module.exports = { getAll, getById, addEntity, updateById, deleteById };
