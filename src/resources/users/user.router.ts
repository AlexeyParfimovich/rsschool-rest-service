/**
 * User router
 * @module userRouter
 */

import { Router } from 'express';
import { User } from './user.model.js';
import * as service from './user.service.js';
import asyncWrapper from '../../utils/asyncWrapper.js';

const router = Router();

/**
 * Get all users
 */
router.route('/').get(asyncWrapper(async (_req, res) => {
  const users = await service.getAll();
  res.status(200).json(users.map(User.toRes));
}));

/**
 * Get user by ID
 */ 
router.route('/:id').get(asyncWrapper(async (req, res) => {
  const user = await service.getById(req.params['id'] || ''); // Костыль из-за конфликта присвоения типов (разобраться с преобразованием типов в TS)
  res.status(200).json(User.toRes(user));
}));

/**
 *  Create new user
 */
router.route('/').post(async (req, res) => {
  const user = await service.addEntity(User.fromReq(req.body));
  res.status(201).json(User.toRes(user));
});

/**
 * Update user's data by ID
 */
router.route('/:id').put(asyncWrapper(async (req, res) => {
  const user = await service.updateById(req.params['id'] || '', req.body || {}); // Костыль из-за конфликта присвоения типов (некогда разбираться)
  res.status(200).json(User.toRes(user));
}));

/**
 * Delete user by ID
 */
router.route('/:id').delete(asyncWrapper(async (req, res) => {
  await service.deleteById(req.params['id'] || ''); // Костыль из-за конфликта присвоения типов (TS - shit, MS - must die)
  res.sendStatus(200);
}));

export default router;