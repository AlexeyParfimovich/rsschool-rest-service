const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id);

const createEntity = (entity) => usersRepo.createEntity(entity);

const updateById = (entity) => usersRepo.getById(entity);

const deleteById = (id) => usersRepo.getById(id);

module.exports = { getAll, getById, createEntity, updateById, deleteById };
