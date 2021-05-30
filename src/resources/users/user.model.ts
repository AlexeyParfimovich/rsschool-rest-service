/**
 * User model
 * @module userModel
 */

import { v1 as uuid } from 'uuid';
import { Entity } from '../../utils/inMemoryDb.js';

/**
 * User entity received from DB
 */
// interface IUser {
//   id: string; // User identifier
//   name: string; // User name
//   login: string; // User login
//   password: string; // User password 
// };

/**
 * Class to create a User entity
 */
export class User {
  id: string; // User identifier

  name: string; // User name

  login: string; // User login 

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
  static toRes(user: Entity): Entity {
    const { id, name, login } = user;
    return { id, name, login };
  };

  /**
   * Static method to create, initiate and return new User
   */
  static fromReq(reqBody: Entity): Entity {
    const user = new User(reqBody);
    return { ...user } ;
  };
}
