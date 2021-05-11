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

  // Обрезаем вывод свойства password
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  toObject() {
    console.log(this.id);
    const { id, name, login, password } = [ this.id, this.name, this.login, this.password ];
    return { id, name, login, password };
  }
  
}

module.exports = User;
