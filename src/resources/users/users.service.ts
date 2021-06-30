import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { hash } from 'bcryptjs';
import { Repository } from 'typeorm';
// import { StatusCodes } from 'http-status-codes';

import { User } from './user.entity';
import { UserDto } from './user.dto';
// import { HTTP_ERROR } from '../../errors/httpError';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>){};

  async addUser(dto: UserDto): Promise<User> {
    const user = this.usersRepository.create(dto);
    
    if(await this.usersRepository.findOne({ 'login': user.login })) {
      throw new HttpException(`User with login "${user.login}" already exists `, HttpStatus.BAD_REQUEST);
      // throw new HTTP_ERROR( StatusCodes.BAD_REQUEST ,`User with login "${user.login}" already exists `);
    }
    user.password = await hash(user.password, 10);
    return this.usersRepository.save(user);
  };

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  };

  async getByIdUser(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new HttpException(`Couldn't find user with ID:${id} `, HttpStatus.NOT_FOUND);
      // throw new HTTP_ERROR( StatusCodes.NOT_FOUND ,`Couldn't find user with ID:${id} `);
    }
    return user;
  };

  async getByLoginUser(login: string): Promise<User> {
    const user = await this.usersRepository.findOne({ 'login': login });
    if (!user) {
      throw new HttpException(`Couldn't find user with login: ${login} `, HttpStatus.NOT_FOUND);
      // throw new HTTP_ERROR( StatusCodes.NOT_FOUND ,`Couldn't find user with login: ${login} `);
    }
    return user;
  };

  async updateByIdUser(id: string, dto: UserDto): Promise<User> { 
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new HttpException(`Couldn't find user with ID:${id} `, HttpStatus.NOT_FOUND);
      // throw new HTTP_ERROR( StatusCodes.NOT_FOUND ,`Couldn't find user with ID:${id} `);
    }
    return this.usersRepository.save({...user, ...dto});
  };

  async deleteByIdUser(id: string): Promise<void> { 
    await this.usersRepository.delete({ 'id': id });
  };
}