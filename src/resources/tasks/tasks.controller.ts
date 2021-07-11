import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from '../../auth/auth.guard';
import { TasksService } from './tasks.service';
import { TaskDto } from './task.dto';
import { Task } from './task.entity';

@ApiTags('Tasks')
@Controller('/boards/:boardId/tasks')
@UseGuards(AuthGuard)
export class TasksController {

  constructor(private tasksService: TasksService){};

  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({ status: 200, type: Task })
  @Post()
  create(@Param('boardId') boardId: string, @Body() dto: TaskDto): Promise<Task> {
    return this.tasksService.addTask(boardId, dto);
  };

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get('/')
  getAll(@Param('boardId') boardId: string): Promise<Task[]>{
    return this.tasksService.getAllTasks(boardId);
  };

  @ApiOperation({ summary: 'Get task by Id' })
  @ApiResponse({ status: 200, type: Task })
  @Get('/:id')
  getById(@Param('boardId') boardId: string, @Param('id') id: string): Promise<Task>{
    return this.tasksService.getByIdTask(boardId, id);
  };

  @ApiOperation({ summary: 'Update task by Id' })
  @ApiResponse({ status: 200, type: Task })
  @Put('/:id')
  updateById(@Param('boardId') boardId: string, 
             @Param('id') id: string, 
             @Body() dto: TaskDto): Promise<Task>{
    return this.tasksService.updateByIdTask(boardId, id, dto);
  };

  @ApiOperation({ summary: 'Delete task by Id' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteById(@Param('boardId') boardId: string, @Param('id') id: string): Promise<void>{
    return this.tasksService.deleteByIdTask(boardId, id);
  };
};