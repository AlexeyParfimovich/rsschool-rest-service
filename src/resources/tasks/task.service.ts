/**
 * Task service
 * @module taskService
 */

 import { getManager } from "typeorm";

 import { TaskDto } from "./task.dto.js";
 import { Task } from "./task.entity.js";
 import { NOT_FOUND_ERROR } from '../../errors/httpError404.js';

/**
 * Function adds an entity into the Tasks table
 */
// const addEntity = async (entity: Entity): Promise<Entity> => tasks.addEntity(entity);
async function addTask(boardId: string, dto: TaskDto): Promise<Task> { 
  const repository = getManager().getRepository(Task);
  // dto.board = boardId;
  const task = repository.create({...dto, board: boardId});
  await repository.save(task);
  return task;
};

 /**
 * Function gets all entities from Tasks table for specified Board
 */
// const getAll = async (boardId: string): Promise<Table> => tasks.getAllFromBoard(boardId);
async function getAllTasks(boardId: string): Promise<Task[]> {
  const repository = getManager().getRepository(Task);
  const tasks = await repository.find({ board: boardId});
  return tasks;
};

/**
 * Function gets an entity from Task table for specified Board, by ID
 */
// const getById = async (boardId: string, id: string): Promise<Entity> => tasks.getFromBoardById(boardId, id);
async function getByIdTask(boardId: string, taskId: string): Promise<Task> {
  const repository = getManager().getRepository(Task);
  const task = await repository.findOne({id: taskId, board: boardId});
  if (!task) {
    throw new NOT_FOUND_ERROR(`Couldn't find task with ID:${taskId} for the board ${boardId} `);
  }
  return task;
};


/**
 * Function updates an entity in the Tasks table by specified identifier
 */
//  const updateById = async (_boardId: string, id: string, entity: Entity): Promise<Entity> => tasks.updateById(id, entity)
 async function updateByIdTask(boardId: string, taskId: string, dto: TaskDto): Promise<Task> { 
  const repository = getManager().getRepository(Task);
  const task = await repository.findOne({id: taskId, board: boardId});
  if (!task) {
    throw new NOT_FOUND_ERROR(`Couldn't find task with ID:${taskId} for the board ${boardId} `);
  }
  const result = await repository.save({ ...task, ...dto });
  return result;
};

/**
 * Function deletes an entity from Tasks table by specified identifier
 */
// const deleteById = async (_boardId: string, id: string): Promise<void> => {
//   // await boardService.getById(boardId);
//   await tasks.deleteById(id);
// };
async function deleteByIdTask(boardId: string, taskId: string): Promise<void> { 
  const repository = getManager().getRepository(Task);
  const task = await repository.findOne({id: taskId, board: boardId});
  if (!task) {
    throw new NOT_FOUND_ERROR(`Couldn't find task with ID:${taskId} for the board ${boardId} `);
  }
  await repository.remove(task);
};

/**
 * Function deletes all entity from Tasks table for specified Board
 */
// const deleteByBoard = async (boardId: string): Promise<void> => tasks.deleteAllFromBoard(boardId);
// async function deleteByBoardTasks(boardId: string): Promise<void> { 
//   const repository = getManager().getRepository(Task);
//   const tasks = await repository.find({ board: boardId });
//   if (!tasks) {
//     throw new NOT_FOUND_ERROR(`Couldn't find tasks for the board :${boardId} `);
//   }
//   await repository.remove(tasks);
// };

/**
 * Function to update all Tasks matched by specified pattern
 */
// async function clearByUserTasks(userId: string): Promise<void> {
//   const repository = getManager().getRepository(Task);
//   const tasks = await repository.find({ user: userId });
//   if (!tasks) {
//     throw new NOT_FOUND_ERROR(`Couldn't find tasks for the user :${userId} `);
//   }

//   tasks.forEach((_item,index) => {
//     tasks[index].user = null;
//     // task.user = null;
//   })

//   await repository.save(tasks);
// };

export { 
  addTask, 
  getAllTasks, 
  getByIdTask, 
  updateByIdTask, 
  deleteByIdTask, 
  // updateByMatch, 
  // deleteByBoard 
};
