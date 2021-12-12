import { FastifyInstance, RegisterOptions } from 'fastify';
import {
  getTasksOpts,
  getTaskOpts,
  postTaskOpts,
  putTaskOpts,
  deleteTaskOpts,
} from './task.schema';

type Done = () => void;

/**
 * Fastify router providing task related routes
 *
 * @param fastify - a first term type of FastifyInstance
 * @param _ - a second term type of RegisterOptions
 * @param done - a third term type of Done
 * @returns type void
 */
export default async function taskRoutes(fastify: FastifyInstance, _: RegisterOptions, done: Done): Promise<void> {
  fastify.get('/boards/:boardId/tasks', getTasksOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskOpts);
  fastify.post('/boards/:boardId/tasks', postTaskOpts);
  fastify.put('/boards/:boardId/tasks/:taskId', putTaskOpts);
  fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);

  done();
}
