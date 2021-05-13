const uuid = require('uuid').v1;

class Board {
  constructor({
    id = uuid(),
    title = 'Default Border',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  // Фильтрация вывода свойств объекта
  static toRes(board) {
    return board;
  }

  // Создать и вернуть новый объект
  static fromReq(body) {
    return new Board(body);
  }
  
}

module.exports = Board;
