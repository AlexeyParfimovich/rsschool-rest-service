/**
 * Board router
 * @module boardRouter
 */

const router = require('express').Router();

const Board = require('./board.model');
const service = require('./board.service');
const asyncWrapper = require('../../utils/asyncWrapper');

/**
 * Get all boards
 */
router.route('/').get(asyncWrapper(async (req, res) => {
  const boards = await service.getAll();
  res.status(200).json(boards.map(Board.toRes));
}));

/**
 * Get board by ID
 */
router.route('/:id').get(asyncWrapper(async (req, res) => {
    const board = await service.getById(req.params.id);
    res.status(200).json(Board.toRes(board));
}));

/**
 * Create new board
 */
router.route('/').post(async (req, res) => {
  const board = await service.addEntity(Board.fromReq(req.body));
  res.status(201).json(Board.toRes(board));
});

/**
 * Update board's data by ID
 */
router.route('/:id').put(asyncWrapper(async (req, res) => {
  const board = await service.updateById(req.params.id, req.body);
  res.status(200).json(Board.toRes(board));
}));

/**
 * Delete board by ID
 */
router.route('/:id').delete(asyncWrapper(async (req, res) => {
  await service.deleteById(req.params.id);
  res.sendStatus(200);
}));

module.exports = router;