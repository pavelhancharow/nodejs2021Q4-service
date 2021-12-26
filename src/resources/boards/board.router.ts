import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  deleteBoardOpts,
  putBoardOpts,
} from './board.schema';

/**
 * Fastify router providing board related routes
 *
 * @param fastify - a first term type of FastifyInstance
 */
export const boardRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance
): Promise<void> => {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.put('/boards/:boardId', putBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);
};
