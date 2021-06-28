import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  // eslint-disable-next-line no-useless-constructor
  constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

  async createUser(dto: UserDto): Promise<User> {
    const user = await this.usersRepository.create(dto);
    return this.usersRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}