const uuid = require('uuid').v1;

class Column {
  constructor({
    id = uuid(),
    title = 'Default column',
    order = '1'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  // Фильтрация вывода свойств объекта
  static toRes(column) {
    return column;
  }

  // Создать и вернуть новый объект
  static fromReq(body) {
    return new Column(body);
  }
  
}

module.exports = Column;
