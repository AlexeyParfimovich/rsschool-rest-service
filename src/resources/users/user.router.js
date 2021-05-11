const router = require('express').Router();
const parser = require('express').json();

const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like 'password'
  // console.log(users.map(User.toResponse));
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const users = await usersService.getById(req.params.userId);
  res.json(users.map(User.toResponse));
});

router.route('/').post(parser, async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  console.log(user);
  await usersService.createEntity(user.toObject());
  // map user fields to exclude secret fields like 'password'
  // console.log(users.map(User.toResponse));
  // const users = await usersService.getById(user.id);
  res.json('New user was created');
});

module.exports = router;
