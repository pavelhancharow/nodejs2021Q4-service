import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import {
  getUsersOpts,
  getUserOpts,
  postUserOpts,
  putUserOpts,
  deleteUserOpts,
} from './user.schema';

/**
 * Fastify router providing user related routes
 *
 * @param fastify - a first term type of FastifyInstance
 */
export const userRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance
): Promise<void> => {
  fastify.get('/users', getUsersOpts);
  fastify.get('/users/:userId', getUserOpts);
  fastify.post('/users', postUserOpts);
  fastify.put('/users/:userId', putUserOpts);
  fastify.delete('/users/:userId', deleteUserOpts);
};
