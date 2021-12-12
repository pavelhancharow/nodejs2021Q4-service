import { FastifyInstance, RegisterOptions } from 'fastify';
import {
  getUsersOpts,
  getUserOpts,
  postUserOpts,
  putUserOpts,
  deleteUserOpts,
} from './user.schema';

type Done = () => void;

export default async function userRoutes(fastify: FastifyInstance, _: RegisterOptions, done: Done): Promise<void> {
  fastify.get('/users', getUsersOpts);
  fastify.get('/users/:userId', getUserOpts);
  fastify.post('/users', postUserOpts);
  fastify.put('/users/:userId', putUserOpts);
  fastify.delete('/users/:userId', deleteUserOpts);

  done();
}
