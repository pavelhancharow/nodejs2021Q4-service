const uuid = require('uuid');
const { Column } = require('../column/column.model');

class Board {
  constructor({ id = uuid.v4(), title, columns } = {}) {
    this.id = id;
    this.title = title;

    this.columns = this.setColumns(columns);
  }

  // eslint-disable-next-line class-methods-use-this
  setColumns(array) {
    return [...array].map((cl) => new Column(cl));
  }
}

module.exports = { Board };
