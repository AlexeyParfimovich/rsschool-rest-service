const uuid = require('uuid').v1;

class Task {
  constructor({
    id = uuid(),
    title = 'Default task',
    order = '1',
    description = '',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId
  }

  // Фильтрация вывода свойств объекта
  static toRes(task) {
    return task;
  }

  // Создать и вернуть новый объект
  static fromReq(boardId, body) {
    const task = new Task(body);
    task.boardId = boardId;
    return task;
  }
  
}

module.exports = Task;
