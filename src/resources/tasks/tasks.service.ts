import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './task.entity';
import { TaskDto } from './task.dto';
import { BoardsService } from '../boards/boards.service';
// import { Board } from '../boards/board.entity';

@Injectable()
export class TasksService {

  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>,
              private boardsService: BoardsService){};

  async addTask(boardId: string, dto: TaskDto): Promise<Task> { 
    if(! await this.boardsService.getByIdBoard(boardId)){
      throw new HttpException(`Board with ID:${boardId} doesn't exist `, HttpStatus.NOT_FOUND);
    }
    const task = this.taskRepository.create(dto);
    task.boardId = boardId;
    return this.taskRepository.save(task);
  };

  async getAllTasks(boardId: string): Promise<Task[]> {
    return this.taskRepository.find({ 
      select: [
        'id', 'title', 'order', 'description', 
        'userId', 'boardId', 'columnId'], 
      where: { 'boardId' : boardId }});
  };

  async getByIdTask(boardId: string, taskId: string): Promise<Task> {
    const task = await this.taskRepository.findOne({'id': taskId, 'boardId': boardId});
    if (!task) {
      throw new HttpException(`Couldn't find task with ID:${taskId} for the board ${boardId} `, HttpStatus.NOT_FOUND);
    }
    return task;
  };

  async updateByIdTask(boardId: string, taskId: string, dto: TaskDto): Promise<Task> { 
    const task = await this.taskRepository.findOne({'id': taskId, 'boardId': boardId});
    if (!task) {
      throw new HttpException(`Couldn't find task with ID:${taskId} for the board ${boardId} `, HttpStatus.NOT_FOUND);
    }
    return this.taskRepository.save({ ...task, ...dto });
  };

  async deleteByIdTask(boardId: string, taskId: string): Promise<void> { 
    await this.taskRepository.delete({ 'boardId': boardId, 'id': taskId });
  };
};