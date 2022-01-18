import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from './user.model';
import usersRepo from './user.memory.repository';

type CustomRequest = FastifyRequest<{
  Params: { userId: string };
  Body: User;
}>;

/**
 * Gets the array of objects type of IUser
 *
 * @param _ - a first term type of FastifyRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const getAll = async (
  _: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const users = await usersRepo.getAll();
  return reply.code(200).send(users);
};

/**
 * Gets the object type of IUser or boolean value
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const getById = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const user = await usersRepo.getById(req.params.userId);

  if (!user) reply.code(404).send({ message: 'User not found' });

  return reply.code(200).send(user);
};

/**
 * Creates new object type of IUser
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const create = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const user = await usersRepo.create(req.body);

  return reply.code(201).send(user);
};

/**
 * Updates object type of IUser
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const update = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const user = await usersRepo.update(req.params.userId, req.body);

  if (!user) reply.code(404).send({ message: 'User not found' });

  return reply.code(200).send(user);
};

/**
 * Removes the object from the array of objects type of IUser
 *
 * @param req - a first term type of CustomRequest
 * @param reply - a second term type of FastifyReply
 * @returns Promise type void
 */
export const remove = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const result = await usersRepo.remove(req.params.userId);

  if (!result) reply.code(404).send({ message: 'User not found' });

  return reply.code(204).send();
};
