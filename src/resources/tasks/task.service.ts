import { FastifyReply, FastifyRequest } from 'fastify';
import { ITask } from './task.model';
import tasksRepo from './task.memory.repository';

type CustomRequest = FastifyRequest<{
  Params: { boardId: string, taskId: string };
  Body: ITask
}>

export const getAll = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const tasks = await tasksRepo.getAll(req.params.boardId);
  reply.code(200).send(tasks);
};

export const getById = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const { boardId, taskId } = req.params;
  const task = await tasksRepo.getById(boardId, taskId);

  if (!task) reply.code(404).send('Task not found');

  reply.code(200).send(task);
};

export const create = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const task = await tasksRepo.create(req.params.boardId, req.body);
  reply.code(201).send(task);
};

export const update = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const task = await tasksRepo.update(req.params.taskId, req.body);

  if (!task) reply.code(404).send('Task not found');

  reply.code(200).send(task);
};

export const remove = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const result = await tasksRepo.remove(req.params.taskId);

  if (!result) reply.code(404).send('Task not found');

  reply.code(204).send();
};
