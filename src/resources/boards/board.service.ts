import { FastifyReply, FastifyRequest } from 'fastify';
import { Board } from './board.model';
import boardsRepo from './board.memory.repository';

type CustomRequest = FastifyRequest<{
  Params: { boardId: string };
  Body: Board;
}>;

/**
 * Gets the array of objects type of IBoard
 *
 * @param _ - a first term type of FastifyRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const getAll = async (
  _: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const boards = await boardsRepo.getAll();
  reply.code(200).send(boards);
};

/**
 * Gets the object type of IBoard or boolean value
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const getById = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const board = await boardsRepo.getById(req.params.boardId);

  if (!board) reply.code(404).send({ message: 'Board not found' });

  reply.code(200).send(board);
};

/**
 * Creates new object type of IBoard
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const create = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const board = await boardsRepo.create(req.body);
  reply.code(201).send(board);
};

/**
 * Updates object type of IBoard
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const update = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const board = await boardsRepo.update(req.params.boardId, req.body);

  if (!board) reply.code(404).send(`Board not found`);

  reply.code(200).send(board);
};

/**
 * Removes the object from the array of objects type of IBoard
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const remove = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const result = await boardsRepo.remove(req.params.boardId);

  if (!result) reply.code(404).send('Board not found');

  reply.code(204).send();
};
