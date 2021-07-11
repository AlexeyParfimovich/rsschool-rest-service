import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from '../../auth/auth.guard';
import { BoardsService } from './boards.service';
import { BoardDto } from './board.dto';
import { Board } from './board.entity';

@ApiTags('Boards')
@Controller('boards')
@UseGuards(AuthGuard)
export class BoardsController {

  constructor(private boardsService: BoardsService){};

  @ApiOperation({ summary: 'Create board' })
  @ApiResponse({ status: 200, type: Board })
  @Post()
  create(@Body() dto: BoardDto): Promise<Board> {
    return this.boardsService.addBoard(dto);
  };

  @ApiOperation({ summary: 'Get all boards' })
  @ApiResponse({ status: 200, type: [Board] })
  @Get('/')
  getAll(): Promise<Board[]>{
    return this.boardsService.getAllBoards();
  };

  @ApiOperation({ summary: 'Get board by Id' })
  @ApiResponse({ status: 200, type: Board })
  @Get('/:id')
  getById(@Param('id') id: string): Promise<Board>{
    return this.boardsService.getByIdBoard(id);
  };

  @ApiOperation({ summary: 'Update board by Id' })
  @ApiResponse({ status: 200, type: Board })
  @Put('/:id')
  updateById(@Param('id') id: string, @Body() dto: BoardDto): Promise<Board>{
    return this.boardsService.updateByIdBoard(id, dto);
  };

  @ApiOperation({ summary: 'Delete board by Id' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteById(@Param('id') id: string): Promise<void>{
    return this.boardsService.deleteByIdBoard(id);
  };
};