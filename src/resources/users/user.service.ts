/**
 * User service
 * @module userService
 */

import { getManager } from "typeorm";

import { UserDto } from "./user.dto.js";
import { User } from "./user.entity.js";
import { NOT_FOUND_ERROR } from '../../errors/httpError404.js';

// /**
//  * Function adds an entity into the Users table
//  */
async function addUser(dto: UserDto): Promise<User> { 
  const repository = getManager().getRepository(User);
  const user = repository.create(dto);
  await repository.save(user);
  return user;
};

// /**
//  * Function gets all entities from the Users table
//  */
async function getAllUsers(): Promise<User[]> {
  const repository = getManager().getRepository(User);
  const users = await repository.find();
  return users;
};

// /**
//  * Function gets an entity from the Users table by specified identifier
//  */
async function getByIdUser(id: string): Promise<User> {
  const repository = getManager().getRepository(User);
  const user = await repository.findOne(id);
  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find user with ID:${id} `);
  }
  return user;
};

// /**
//  * Function updates an entity in the Users table by specified identifier
//  */
async function updateByIdUser(id: string, dto: UserDto): Promise<User> { 
  const repository = getManager().getRepository(User);
  const user = await repository.findOne(id);
  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find user with ID:${id} `);
  }
  const result = await repository.save({...user, ...dto});
  return result;
};

// /**
//  * Function deletes an entity from Users table by specified identifier
//  */
async function deleteByIdUser(id: string): Promise<void> { 
  const repository = getManager().getRepository(User);
  const user = await repository.findOne(id);
  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find user with ID:${id} `);
  }
  await repository.remove(user);

  // await updateTasks({userId: id}, {userId: null});
};

export { 
  addUser,
  getAllUsers,
  getByIdUser,
  updateByIdUser,
  deleteByIdUser,
};
