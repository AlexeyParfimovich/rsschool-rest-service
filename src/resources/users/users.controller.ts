import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

  // eslint-disable-next-line no-useless-constructor
  constructor(private userService: UsersService){}

  @Post()
  create(@Body() userDto: UserDto): Promise<User> {
    return this.userService.createUser(userDto);
  }

  @Get('/')
  getAll(): Promise<User[]>{
    return this.userService.getAllUsers();
  }
}