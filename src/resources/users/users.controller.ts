import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from '../../auth/auth.guard';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@ApiTags('Users')
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {

  constructor(private userService: UsersService){};

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post('/')
  async create(@Body() dto: UserDto): Promise<Partial<User>> {
    const user = await this.userService.addUser(dto);
    return Promise.resolve(User.toRes(user));
  };

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('/')
  async getAll(): Promise<Partial<User>[]>{
    const users = await this.userService.getAllUsers();
    return Promise.resolve(users.map(User.toRes));
  };

  @ApiOperation({ summary: 'Get user by Id' })
  @ApiResponse({ status: 200, type: User })
  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Partial<User>>{
    const user = await this.userService.getByIdUser(id);
    return Promise.resolve(User.toRes(user));
  };

  @ApiOperation({ summary: 'Update user by Id' })
  @ApiResponse({ status: 200, type: User })
  @Put('/:id')
  async updateById(@Param('id') id: string, @Body() dto: UserDto): Promise<Partial<User>>{
    const user = await this.userService.updateByIdUser(id, dto);
    return Promise.resolve(User.toRes(user));
  };

  @ApiOperation({ summary: 'Delete user by Id' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  async deleteById(@Param('id') id: string): Promise<void>{
    return this.userService.deleteByIdUser(id);
  };
};