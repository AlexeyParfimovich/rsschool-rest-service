import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcryptjs';

import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private repository: Repository<User>){};

  async addUser(dto: UserDto): Promise<User> {
    const user = this.repository.create(dto);
    
    // if(await this.repository.findOne({ 'login': user.login })) {
    //   throw new HttpException(`User with login "${user.login}" already exists `, HttpStatus.BAD_REQUEST);
    // }
    user.password = await hash(user.password, 10);
    return this.repository.save(user);
  };

  async getAllUsers(): Promise<User[]> {
    return this.repository.find();
  };

  async getByIdUser(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new HttpException(`Couldn't find user with ID:${id} `, HttpStatus.NOT_FOUND);
    }
    return user;
  };

  async getByLoginUser(login: string): Promise<User> {
    const user = await this.repository.findOne({ 'login': login });
    if (!user) {
      throw new HttpException(`Couldn't find user with login: ${login} `, HttpStatus.NOT_FOUND);
    }
    return user;
  };

  async updateByIdUser(id: string, dto: UserDto): Promise<User> { 
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new HttpException(`Couldn't find user with ID:${id} `, HttpStatus.NOT_FOUND);
    }
    return this.repository.save({...user, ...dto});
  };

  async deleteByIdUser(id: string): Promise<void> { 
    await this.repository.delete({ 'id': id });
  };
};