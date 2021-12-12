import { FastifyReply, FastifyRequest } from 'fastify';
import { ITask } from './task.model';
import tasksRepo from './task.memory.repository';

type CustomRequest = FastifyRequest<{
  Params: { boardId: string, taskId: string };
  Body: ITask
}>

/**
 * Gets the array of objects type of ITask
 *
 * @param _ - a first term type of FastifyRequest
 * @param reply - a second term type of FastifyReply
 * @returns type void
 */
export const getAll = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const tasks = await tasksRepo.getAll(req.params.boardId);
  reply.code(200).send(tasks);
};

/**
 * Gets the object type of ITask or boolean value
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns type void
 */
export const getById = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const { boardId, taskId } = req.params;
  const task = await tasksRepo.getById(boardId, taskId);

  if (!task) reply.code(404).send('Task not found');

  reply.code(200).send(task);
};

/**
 * Creates new object type of ITask
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns type void
 */
export const create = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const task = await tasksRepo.create(req.params.boardId, req.body);
  reply.code(201).send(task);
};

/**
 * Updates object type of ITask
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns type void
 */
export const update = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const task = await tasksRepo.update(req.params.taskId, req.body);

  if (!task) reply.code(404).send('Task not found');

  reply.code(200).send(task);
};

/**
 * Removes the object from the array of objects type of ITask
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns type void
 */
export const remove = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const result = await tasksRepo.remove(req.params.taskId);

  if (!result) reply.code(404).send('Task not found');

  reply.code(204).send();
};
