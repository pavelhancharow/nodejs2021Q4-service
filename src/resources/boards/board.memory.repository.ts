const { Board } = require('./board.model');
const { deleteTask } = require('../tasks/task.memory.repository');

const boards = [];

const getAll = async () => boards;

const getById = async (id) => {
  const board = await boards.find((b) => b.id === id);

  if (!board) return false;

  return board;
};

const create = async (body) => {
  const board = new Board(body);
  boards.push(board);
  return board;
};

const update = async (params, body) => {
  let idx = null;

  for (let i = 0; i < boards.length; i++) {
    if (boards[i].id === params.boardId) {
      idx = i;
      boards[i] = { ...boards[i], ...body };
    }
  }

  if (!boards[idx]) return false;

  return boards[idx];
};

const remove = async (id) => {
  const idx = boards.findIndex((b) => b.id === id);

  if (idx === -1) return false;

  boards.splice(idx, 1);
  deleteTask(id);
  return boards;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
