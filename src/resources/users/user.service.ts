import { FastifyReply, FastifyRequest } from 'fastify';
import { IUser } from './user.model';
import usersRepo from './user.memory.repository';

type CustomRequest = FastifyRequest<{
  Params: { userId: string };
  Body: IUser
}>

export const getAll = async (_: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const users = await usersRepo.getAll();
  reply.code(200).send(users);
};

export const getById = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const user = await usersRepo.getById(req.params.userId);

  if (!user) reply.code(404).send({ message: 'User not found' });

  reply.code(200).send(user);
};

export const create = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const user = await usersRepo.create(req.body);

  reply.code(201).send(user);
};

export const update = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const user = await usersRepo.update(req.params.userId, req.body);

  if (!user) reply.code(404).send({ message: 'User not found' });

  reply.code(200).send(user);
};

export const remove = async (req: CustomRequest, reply: FastifyReply): Promise<void> => {
  const result = await usersRepo.remove(req.params.userId);

  if (!result) reply.code(404).send({ message: 'User not found' });

  reply.code(204).send();
};
