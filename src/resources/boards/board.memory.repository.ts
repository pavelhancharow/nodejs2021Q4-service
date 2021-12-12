import { Board, IBoard } from './board.model';
// const { deleteTask } = require('../tasks/task.memory.repository');

const boards: IBoard[] = [];

const getAll = async (): Promise<IBoard[]> => boards;

const getById = async (boardId: string): Promise<IBoard | boolean> => {
  const board = boards.find((b) => b.id === boardId);

  if (!board) return false;

  return board;
};

const create = async (body: IBoard): Promise<IBoard> => {
  const board = new Board(body);

  boards.push(board);

  return board;
};

const update = async (boardId: string, body: IBoard): Promise<IBoard> => {
  let idx = NaN;

  for (let i = 0; i < boards.length; i++) {
    if (boards[i].id === boardId) {
      idx = i;
      boards[i] = { ...boards[i], ...body };
    }
  }

  return boards[idx];
};

const remove = async (boardId: string): Promise<IBoard[] | boolean> => {
  const idx = boards.findIndex((b) => b.id === boardId);

  if (idx === -1) return false;

  boards.splice(idx, 1);
  // deleteTask(id);
  return boards;
};

export = {
  getAll,
  getById,
  create,
  update,
  remove,
};
