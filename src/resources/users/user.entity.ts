/**
 * User model
 * @module userModel
 */

import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v1 as uuid } from 'uuid';

/**
 * Class to create a User entity
 */
@Entity()
export class User {
  
  @ApiProperty({ example: 'da7e8ff0-d7fc-11eb-ba28-6f316db88e1f', description: 'uuid identifier' })
  @PrimaryColumn()
  id: string; // User identifier

  @ApiProperty({ example: 'James Doe', description: 'user name' })
  @Column()
  name: string; // User name

  @ApiProperty({ example: 'jamesdoe2021', description: 'user login' })
  @Column()
  login: string; // User login 

  @ApiProperty({ example: 'P@ssw0rd123', description: 'user password' })
  @Column()
  password: string; // User password 

  constructor({
    id = uuid(),
    name = 'Default User',
    login = 'user',
    password = 'P@ssw0rd'
  }: Partial<User> = {}) {
    
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  };

  /**
   * Static method to filter off the password attribute
   */
  static toRes(user: User): Partial<User> {
    const { id, name, login } = user;
    return { id, name, login };
  };

}
