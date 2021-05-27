/**
 * Task router
 * @module taskRouter
 */

// Use {mergeParams: true} to access parent route params
const router = require('express').Router({mergeParams: true});

const Obj = require('./task.model');
const service = require('./task.service');
const asyncWrapper = require('../../utils/asyncWrapper');

/**
 * Get all tasks from a given board
 */
router.route('/').get(asyncWrapper(async (req, res) => {
  const array = await service.getAll(req.params.ownerId);
  res.status(200).json(array.map(Obj.toRes));
}));

/**
 * Get a task by ID, from a given board
 */
router.route('/:id').get(asyncWrapper(async (req, res) => {
    const item = await service.getById(req.params.ownerId, req.params.id);
    res.status(200).json(Obj.toRes(item));
}));

/** 
 * Create a new task on a given board
 */
router.route('/').post(asyncWrapper(async (req, res) => {
  const item = await service.addEntity(Obj.fromReq(req.params.ownerId, req.body));
  res.status(201).json(Obj.toRes(item));
}));

/**
 * Update a task by ID, on a given board
 */
router.route('/:id').put(asyncWrapper(async (req, res) => {
  const item = await service.updateById(req.params.ownerId, req.params.id, req.body);
  res.status(200).json(Obj.toRes(item));
}));

/**
 * Delete a task by ID on a given board
 */
router.route('/:id').delete(asyncWrapper(async (req, res) => {
  await service.deleteById(req.params.ownerId, req.params.id);
  res.sendStatus(200);
}));

module.exports = router;