const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const deleteById = (id) => usersRepo.deleteById(id);

const addEntity = (entity) => usersRepo.addEntity(entity);

const updateById = (id, entity) => usersRepo.updateById(id, entity);

module.exports = { getAll, getById, addEntity, updateById, deleteById };
