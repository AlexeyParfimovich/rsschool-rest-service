const router = require('express').Router();

const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toRes));
});

/*
  TODO: Обработка ситуации если пользователя с таким ID не существует или массив пользователей пустой!
*/
router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.status(200).json(User.toRes(user));
});

router.route('/').post(async (req, res) => {
  // console.log('Получено тело запроса: ',req.body);
  const user = await usersService.addEntity(User.fromReq(req.body));
  // console.log('Создан пользователь:', user);
  res.status(201).json(User.toRes(user));
});

/*
 TODO: Обработка ситуации если пользователя с таким ID не существует или массив пользователей пустой!
*/
router.route('/:id').put(async (req, res) => {
  // console.log('Получено тело запроса: ', req.body);
  const user = await usersService.updateById(req.params.id, req.body);
  // console.log('Обновлен пользователь:', user);
  res.status(200).json(User.toRes(user));
});

router.route('/:id').delete(async (req, res) => {
  // console.log('Получен запрос на удаление с индексом', req.params.id);
  await usersService.deleteById(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
