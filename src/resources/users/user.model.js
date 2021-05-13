const uuid = require('uuid').v1;

class User {
  constructor({
    id = uuid(),
    name = 'Default User',
    login = 'user',
    password = 'P@ssw0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  // Фильтрация вывода свойств объекта
  static toRes(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  // Создать и вернуть новый объект
  static fromReq(body) {
    return new User(body);
  }
  
}

module.exports = User;
