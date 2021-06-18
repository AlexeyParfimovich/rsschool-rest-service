/**
 * Task router
 * @module taskRouter
 */

import { Router } from 'express';
import * as service from './task.service.js';
import asyncWrapper from '../../utils/asyncWrapper.js';

const router = Router({mergeParams: true}); // Use {mergeParams: true} to access parent route params

/** 
 * Create a new task on a given board
 */
 router.route('/').post(asyncWrapper(async (req, res) => {
  const task = await service.addTask(req.params['boardId'], req.body);
  res.status(201).json(task);
}));

/**
 * Get all tasks from a given board
 */
router.route('/').get(asyncWrapper(async (req, res) => {
  const tasks = await service.getAllTasks(req.params['boardId']);
  res.status(200).json(tasks);
}));

/**
 * Get a task by ID, from a given board
 */
router.route('/:id').get(asyncWrapper(async (req, res) => {
  const task = await service.getByIdTask(req.params['boardId'], req.params['id']);
  res.status(200).json(task);
}));

/**
 * Update a task by ID, on a given board
 */
router.route('/:id').put(asyncWrapper(async (req, res) => {
  const task = await service.updateByIdTask(req.params['boardId'], req.params['id'], req.body);
  res.status(200).json(task);
}));

/**
 * Delete a task by ID on a given board
 */
router.route('/:id').delete(asyncWrapper(async (req, res) => {
  await service.deleteByIdTask(req.params['boardId'], req.params['id']);
  res.sendStatus(200);
}));

export default router;