/**
 * Board router
 * @module boardRouter
 */

import { Router } from 'express';
import * as service from './board.service';
import asyncWrapper from '../../utils/asyncWrapper';

const router = Router();

/**
 * Create new board
 */
 router.route('/').post(asyncWrapper(async (req, res) => {
  const board = await service.addBoard(req.body);
  res.status(201).json(board);
}));

/**
 * Get all boards
 */
router.route('/').get(asyncWrapper(async (_req, res) => {
  const boards = await service.getAllBoards();
  res.status(200).json(boards);
}));

/**
 * Get board by ID
 */
router.route('/:id').get(asyncWrapper(async (req, res) => {
  const board = await service.getByIdBoard(req.params['id']);
  res.status(200).json(board);
}));

/**
 * Update board's data by ID
 */
router.route('/:id').put(asyncWrapper(async (req, res) => {
  const board = await service.updateByIdBoard(req.params['id'], req.body);
  res.status(200).json(board);
}));

/**
 * Delete board by ID
 */
router.route('/:id').delete(asyncWrapper(async (req, res) => {
  await service.deleteByIdBoard(req.params['id']);
  res.sendStatus(200);
}));

export default router;