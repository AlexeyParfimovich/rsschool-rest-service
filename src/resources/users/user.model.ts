/**
 * User model
 * @module userModel
 */

import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v1 as uuid } from 'uuid';
// import { Entity } from '../../utils/inMemoryDb.js';

/**
 * Class to create a User entity
 */
@Entity()
export class User {
  
  @PrimaryColumn()
  id: string; // User identifier

  @Column()
  name: string; // User name

  @Column()
  login: string; // User login 

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

  /**
   * Static method to create, initiate and return new User
   */
  // static fromReq(reqBody: Partial<User>): User {
  //   const user = new User(reqBody);
  //   return { ...user } ;
  // };
}
