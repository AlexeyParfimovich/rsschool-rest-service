/**
 * User service
 * @module userService
 */

 import { getManager } from "typeorm";
 import { UserDto } from "./user.dto.js";
 import { User } from "./user.entity.js";
 
 import { NOT_FOUND_ERROR } from '../../errors/httpError404.js';

// import { updateByMatch as updateTasks } from '../tasks/task.service.js';

// /**
//  * Function adds an entity into the Users table
//  */
async function addUser(entity: UserDto): Promise<User> { 

  const postRepository = getManager().getRepository(User);

  const newPost = postRepository.create(entity);

  await postRepository.save(newPost);

  return newPost;
};

// /**
//  * Function gets all entities from the Users table
//  */
async function getAllUsers(): Promise<User[]> {

  const postRepository = getManager().getRepository(User);

  const users = await postRepository.find();

  return users;
};

// /**
//  * Function gets an entity from the Users table by specified identifier
//  */
async function getByIdUser(id: string): Promise<User> {

  const postRepository = getManager().getRepository(User);

  const user = await postRepository.findOne(id);

  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with ID:${id} `);
  }
  return user;
};

// /**
//  * Function updates an entity in the Users table by specified identifier
//  */
async function updateByIdUser(id: string, entity: UserDto): Promise<User> { 

  const postRepository = getManager().getRepository(User);

  const user = await postRepository.findOne(id);

  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with ID:${id} `);
  }

  Object.assign(user,entity);

  await postRepository.save(user);

  return user;
};

// /**
//  * Function deletes an entity from Users table by specified identifier
//  */
// const deleteById = async (id: string): Promise<void> => {
//   await users.deleteById(id);
//   await updateTasks({userId: id}, {userId: null});
// }
async function deleteByIdUser(id: string): Promise<void> { 

  const postRepository = getManager().getRepository(User);

  const user = await postRepository.findOne(id);

  if (!user) {
    throw new NOT_FOUND_ERROR(`Couldn't find a user with ID:${id} `);
  }

  await postRepository.remove(user);
};


export { 
  addUser,
  getAllUsers,
  getByIdUser,
  updateByIdUser,
  deleteByIdUser,
};
