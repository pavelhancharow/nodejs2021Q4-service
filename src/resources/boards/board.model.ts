const uuid = require('uuid');
const { Column } = require('../column/column.model');

class Board {
  constructor({ id = uuid.v4(), title, columns } = {}) {
    this.id = id;
    this.title = title;

    this.columns = Board.setColumns(columns);
  }

  static setColumns(array) {
    return [...array].map((cl) => new Column(cl));
  }
}

module.exports = { Board };
