/**
 * Board service
 * @module boardService
 */

import { getManager } from "typeorm";

import { BoardDto } from "./board.dto.js";
import { Board } from "./board.entity.js";
import { NOT_FOUND_ERROR } from "../../errors/httpError404.js";

/**
 * Function adds an entity into the Boards table
 */
async function addBoard(dto: BoardDto): Promise<Board> {

  const repository = getManager().getRepository(Board);
  const board = repository.create(dto);
  await repository.save(board);
  return board;
};
 
/**
 * Function gets all entities from the Boards table
 */
async function getAllBoards(): Promise<Board[]> {
  const repository = getManager().getRepository(Board);
  const boards = await repository.find();
  return boards;
};

/**
 * Function gets an entity from the Boards table by specified identifier
 */
async function getByIdBoard(id: string): Promise<Board> {
  const repository = getManager().getRepository(Board);
  const board = await repository.findOne(id);
  if (!board) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with ID:${id} `);
  }
  return board;
};

/**
 * Function updates an entity in the Boards table by specified identifier
 */
async function updateByIdBoard(id: string, dto: BoardDto): Promise<Board> {
  const repository = getManager().getRepository(Board);
  const board = await repository.findOne(id);
  if (!board) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with ID:${id} `);
  }
  Object.assign(board,dto);
  await repository.save(board);
  return board;
};

/**
 * Function deletes an entity from Boards table by specified identifier
 */
 async function deleteByIdBoard(id: string): Promise<void> {
  const repository = getManager().getRepository(Board);
  const board = await repository.findOne(id);
  if (!board) {
    throw new NOT_FOUND_ERROR(`Couldn't find a board with ID:${id} `);
  }
  await repository.remove(board);
  
  //  await deleteAllTasks(id);
};

export { 
  addBoard,
  getAllBoards,
  getByIdBoard,
  updateByIdBoard,
  deleteByIdBoard 
};
