import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { AuthGuard } from '../../auth/auth.guard';

@ApiTags('Users')
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {

  constructor(private userService: UsersService){};

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() dto: UserDto): Promise<User> {
    return this.userService.addUser(dto);
  };

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  // @UseGuards(AuthGuard)
  @Get('/')
  getAll(): Promise<User[]>{
    return this.userService.getAllUsers();
  };

  @ApiOperation({ summary: 'Get user by Id' })
  @ApiResponse({ status: 200, type: User })
  @Get('/:id')
  getById(@Param('id') id: string): Promise<User>{
    return this.userService.getByIdUser(id);
  };

  @ApiOperation({ summary: 'Update user by Id' })
  @ApiResponse({ status: 200, type: User })
  @Put('/:id')
  updateById(@Param('id') id: string, @Body() dto: UserDto): Promise<User>{
    return this.userService.updateByIdUser(id, dto);
  };

  @ApiOperation({ summary: 'Delete user by Id' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteById(@Param('id') id: string): Promise<void>{
    return this.userService.deleteByIdUser(id);
  };
}