import { getRepository } from 'typeorm';
import { Board } from './board.model';
import taskRepo from '../tasks/task.memory.repository';

/**
 * Gets the array of objects type of IBoard
 *
 * @returns Promise array of objects type of IBoard
 */
const getAll = async (): Promise<Board[]> => getRepository(Board).find();

/**
 * Gets by id the object type of IBoard or boolean value
 *
 * @param boardId - a first term string
 * @returns Promise object type of IBoard or boolean value
 */
const getById = async (boardId: string): Promise<Board | boolean> => {
  const board = await getRepository(Board).findOne(boardId);

  if (!board) return false;

  return board;
};

/**
 * Creates new object type of IBoard
 *
 * @param body - a first term type of IBoard
 * @returns Promise new object type of IBoard
 */
const create = async (body: Board): Promise<Board> => {
  const board = await getRepository(Board).save(body);

  return board;
};

/**
 * Updates object type of IBoard
 *
 * @param boardId - a first term string
 * @param body - a second term object type of IBoard
 * @returns Promise updated object type of IBoard
 */
const update = async (
  boardId: string,
  body: Board
): Promise<Board | boolean> => {
  const board = await getRepository(Board).findOne(boardId);

  if (board) {
    const updateBoard = await getRepository(Board).save({ ...board, ...body });
    return updateBoard;
  }

  return false;
};

/**
 * Removes the object from the array of objects type of IBoard
 *
 * @param boardId - a first term string
 * @returns Promise array of objects type of IBoard or boolean value
 */
const remove = async (boardId: string): Promise<Board[] | boolean> => {
  const board = await getRepository(Board).findOne(boardId);

  if (!board) return false;

  await taskRepo.deleteRelatedTasks(boardId);
  await getRepository(Board).delete(boardId);

  const boards = await getRepository(Board).find();

  return boards;
};

export = {
  getAll,
  getById,
  create,
  update,
  remove,
};
