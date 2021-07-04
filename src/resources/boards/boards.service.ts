import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Board } from './board.entity';
import { BoardDto } from './board.dto';

@Injectable()
export class BoardsService {

  constructor(@InjectRepository(Board) private repository: Repository<Board>){};

  async addBoard(dto: BoardDto): Promise<Board> {
    const board = this.repository.create(dto);
    return this.repository.save(board);
  };
 
  async getAllBoards(): Promise<Board[]> {
    return this.repository.find();
  };

  async getByIdBoard(id: string): Promise<Board> {
    const board = await this.repository.findOne(id);
    if (!board) {
      throw new HttpException(`Couldn't find board with ID:${id} `, HttpStatus.NOT_FOUND);
    }
    return board;
  };

  async updateByIdBoard(id: string, dto: BoardDto): Promise<Board> {
    const board = await this.repository.findOne(id);
    if (!board) {
      throw new HttpException(`Couldn't find board with ID:${id} `, HttpStatus.NOT_FOUND);
    }
    return this.repository.save({...board, ...dto});
  };

  async deleteByIdBoard(id: string): Promise<void> {
    await this.repository.delete({ 'id': id });
  };
};