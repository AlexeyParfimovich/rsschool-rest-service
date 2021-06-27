/**
 * Task service
 * @module taskService
 */

import { getRepository } from "typeorm";


import { TaskDto } from "./task.dto";
import { Task } from "./task.entity";
import { Board } from "../boards/board.entity";
import { NOT_FOUND_ERROR } from '../../errors/httpError404';

/**
 * Function adds an entity into the Tasks table
 */
async function addTask(boardId = '', dto: TaskDto): Promise<Task> { 
  if(! await getRepository(Board).findOne(boardId)){
    throw new NOT_FOUND_ERROR(`Board with ID:${boardId} doesn't exist `);
  }
  const taskRep = getRepository(Task);
  const task = taskRep.create(dto);
  task.boardId = boardId;
  return taskRep.save(task);
};

/**
 * Function gets all entities from Tasks table for specified Board
 */
async function getAllTasks(boardId = ''): Promise<Task[]> {
  return getRepository(Task).find({ 
    select: [
      'id', 'title', 'order', 'description', 
      'userId', 'boardId', 'columnId'], 
    where: { 'boardId' : boardId }});
};

/**
 * Function gets an entity from Task table for specified Board, by ID
 */
async function getByIdTask(boardId = '', taskId = ''): Promise<Task> {
  const task = await getRepository(Task).findOne({'id': taskId, 'boardId': boardId});
  if (!task) {
    throw new NOT_FOUND_ERROR(`Couldn't find task with ID:${taskId} for the board ${boardId} `);
  }
  return task;
};

/**
 * Function updates an entity in the Tasks table by specified identifier
 */
 async function updateByIdTask(boardId = '', taskId = '', dto: TaskDto): Promise<Task> { 
  const taskRep = getRepository(Task);
  const task = await taskRep.findOne({'id': taskId, 'boardId': boardId});
  if (!task) {
    throw new NOT_FOUND_ERROR(`Couldn't find task with ID:${taskId} for the board ${boardId} `);
  }
  return taskRep.save({ ...task, ...dto });
};

/**
 * Function deletes an entity from Tasks table by specified identifier
 */
async function deleteByIdTask(boardId = '', taskId = ''): Promise<void> { 
  await getRepository(Task).delete({ 'boardId': boardId, 'id': taskId });
};

export { 
  addTask, 
  getAllTasks, 
  getByIdTask, 
  updateByIdTask, 
  deleteByIdTask, 
};
