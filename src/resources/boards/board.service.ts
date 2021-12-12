import { FastifyReply, FastifyRequest } from 'fastify';
import { IBoard } from './board.model';
import boardsRepo from './board.memory.repository';

type CustomRequest = FastifyRequest<{
  Params: { boardId: string };
  Body: IBoard
}>

export const getAll = async (_: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const boards = await boardsRepo.getAll();
  reply.code(200).send(boards);
};

export const getById = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const board = await boardsRepo.getById(req.params.boardId);

  if (!board) reply.code(404).send({ message: 'Board not found' });

  reply.code(200).send(board);
};

export const create = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const board = await boardsRepo.create(req.body);
  reply.code(201).send(board);
};

export const update = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const board = await boardsRepo.update(req.params.boardId, req.body);

  if (!board) reply.code(404).send(`Board not found`);

  reply.code(200).send(board);
};

export const remove = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const result = await boardsRepo.remove(req.params.boardId);

  if (!result) reply.code(404).send('Board not found');

  reply.code(204).send();
};
