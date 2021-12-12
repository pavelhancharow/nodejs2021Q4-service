import { FastifyInstance, RegisterOptions } from 'fastify';
import {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  deleteBoardOpts,
  putBoardOpts,
} from './board.schema';

type Done = () => void;

/**
 * Fastify router providing board related routes
 *
 * @param fastify - a first term type of FastifyInstance
 * @param _ - a second term type of RegisterOptions
 * @param done - a third term type of Done
 * @returns type void
 */
export default async function boardRoutes(fastify: FastifyInstance, _: RegisterOptions, done: Done): Promise<void> {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.put('/boards/:boardId', putBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);

  done();
}
