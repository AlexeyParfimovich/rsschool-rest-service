/**
 * User service
 * @module userService
 */

import { getRepository } from "typeorm";

import { UserDto } from "./user.dto";
import { User } from "./user.entity";
import { NOT_FOUND_ERROR } from '../../errors/httpError404';

// /**
//  * Function adds an entity into the Users table
//  */
async function addUser(dto: UserDto): Promise<User> { 
  const userRep = getRepository(User);
  const user = userRep.create(dto);
  return userRep.save(user);
};

// /**
//  * Function gets all entities from the Users table
//  */
async function getAllUsers(): Promise<User[]> {
  return getRepository(User).find();
};

// /**
//  * Function gets an entity from the Users table by specified identifier
//  */
async function getByIdUser(id = ''): Promise<User> {
  const user = await getRepository(User).findOne(id);
  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find user with ID:${id} `);
  }
  return user;
};

// /**
//  * Function updates an entity in the Users table by specified identifier
//  */
async function updateByIdUser(id = '', dto: UserDto): Promise<User> { 
  const userRep = getRepository(User);
  const user = await userRep.findOne(id);
  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find user with ID:${id} `);
  }
  return userRep.save({...user, ...dto});
};

// /**
//  * Function deletes an entity from Users table by specified identifier
//  */
async function deleteByIdUser(id = ''): Promise<void> { 
  await getRepository(User).delete({ 'id': id });
};

export { 
  addUser,
  getAllUsers,
  getByIdUser,
  updateByIdUser,
  deleteByIdUser,
};
