const uuid = require('uuid');

class Task {
  constructor({
    id = uuid.v4(),
    title,
    order,
    description,
    userId,
    boardId = uuid.v4(),
    columnId,
  } = {}) {
    this.id = id;
    this.title = title;
    this.columnId = columnId;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
  }
}

module.exports = { Task };
