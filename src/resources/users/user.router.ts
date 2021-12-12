import { FastifyInstance, RegisterOptions } from 'fastify';
import {
  getUsersOpts,
  getUserOpts,
  postUserOpts,
  putUserOpts,
  deleteUserOpts,
} from './user.schema';

type Done = () => void;

/**
 * Fastify router providing user related routes
 *
 * @param fastify - a first term type of FastifyInstance
 * @param _ - a second term type of RegisterOptions
 * @param done - a third term type of Done
 * @returns type void
 */
export default async function userRoutes(fastify: FastifyInstance, _: RegisterOptions, done: Done): Promise<void> {
  fastify.get('/users', getUsersOpts);
  fastify.get('/users/:userId', getUserOpts);
  fastify.post('/users', postUserOpts);
  fastify.put('/users/:userId', putUserOpts);
  fastify.delete('/users/:userId', deleteUserOpts);

  done();
}
