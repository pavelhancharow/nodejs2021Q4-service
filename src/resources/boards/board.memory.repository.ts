import { Board, IBoard } from './board.model';
import taskRepo from '../tasks/task.memory.repository';

const boards: IBoard[] = [];

/**
 * Gets the array of objects type of IBoard
 *
 * @returns Array of objects type of IBoard
 */
const getAll = async (): Promise<IBoard[]> => boards;

/**
 * Gets by id the object type of IBoard or boolean value
 *
 * @param boardId - a first term string
 * @returns Object type of IBoard or boolean value
 */
const getById = async (boardId: string): Promise<IBoard | boolean> => {
  const board = boards.find((b) => b.id === boardId);

  if (!board) return false;

  return board;
};

/**
 * Creates new object type of IBoard
 *
 * @param body - a first term type of IBoard
 * @returns New object type of IBoard
 */
const create = async (body: IBoard): Promise<IBoard> => {
  const board = new Board(body);

  boards.push(board);

  return board;
};

/**
 * Updates object type of IBoard
 *
 * @param boardId - a first term string
 * @param body - a second term object type of IBoard
 * @returns Updated object type of IBoard
 */
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

/**
 * Removes the object from the array of objects type of IBoard
 *
 * @param boardId - a first term string
 * @returns Array of objects type of IBoard or boolean value
 */
const remove = async (boardId: string): Promise<IBoard[] | boolean> => {
  const idx = boards.findIndex((b) => b.id === boardId);

  if (idx === -1) return false;

  await taskRepo.deleteRelatedTasks(boardId);
  boards.splice(idx, 1);

  return boards;
};

export = {
  getAll,
  getById,
  create,
  update,
  remove,
};
