const router = require('express').Router();

const User = require('./user.model');
const usersService = require('./user.service');
const asyncWrapper = require('../../utils/asyncWrapper');

// Get all users
router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toRes));
});

// Get user by ID
router.route('/:id').get(asyncWrapper(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    res.status(200).json(User.toRes(user));
}));

/*
  TODO: Обработка ситуации c передачей текстовых данных в body - нужно преобразование в JSON
*/
// Create new user
router.route('/').post(async (req, res) => {
  // console.log('Получено тело запроса: ',req.body);
  const user = await usersService.addEntity(User.fromReq(req.body));
  // console.log('Создан пользователь:', user);
  res.status(201).json(User.toRes(user));
});

// Update user's data by ID
router.route('/:id').put(asyncWrapper(async (req, res) => {
  const user = await usersService.updateById(req.params.id, req.body);
  res.status(200).json(User.toRes(user));
}));

// Delete user by ID
router.route('/:id').delete(asyncWrapper(async (req, res) => {
  await usersService.deleteById(req.params.id);
  res.sendStatus(200);
}));

module.exports = router;
