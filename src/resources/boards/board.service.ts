/**
 * Board service
 * @module boardService
 */

import { getRepository } from "typeorm";
import { StatusCodes } from 'http-status-codes';

import { BoardDto } from "./board.dto";
import { Board } from "./board.entity";
import { HTTP_ERROR } from "../../errors/httpError";

/**
 * Function adds an entity into the Boards table
 */
async function addBoard(dto: BoardDto): Promise<Board> {
  const boardRep = getRepository(Board);
  const board = boardRep.create(dto);
  return boardRep.save(board);
};
 
/**
 * Function gets all entities from the Boards table
 */
async function getAllBoards(): Promise<Board[]> {
  return getRepository(Board).find();
};

/**
 * Function gets an entity from the Boards table by specified identifier
 */
async function getByIdBoard(id = ''): Promise<Board> {
  const board = await getRepository(Board).findOne(id);
  if (!board) {
    throw new HTTP_ERROR( StatusCodes.NOT_FOUND ,`Couldn't find a board with ID:${id} `);
  }
  return board;
};

/**
 * Function updates an entity in the Boards table by specified identifier
 */
async function updateByIdBoard(id = '', dto: BoardDto): Promise<Board> {
  const boardRep = getRepository(Board);
  const board = await boardRep.findOne(id);
  if (!board) {
    throw new HTTP_ERROR( StatusCodes.NOT_FOUND ,`Couldn't find a board with ID:${id} `);
  }
  return boardRep.save({...board, ...dto});
};

/**
 * Function deletes an entity from Boards table by specified identifier
 */
 async function deleteByIdBoard(id = ''): Promise<void> {
  await getRepository(Board).delete({ 'id': id });
};

export { 
  addBoard,
  getAllBoards,
  getByIdBoard,
  updateByIdBoard,
  deleteByIdBoard 
};
