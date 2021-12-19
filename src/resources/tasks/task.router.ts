import { FastifyInstance } from 'fastify';
import {
  getTasksOpts,
  getTaskOpts,
  postTaskOpts,
  putTaskOpts,
  deleteTaskOpts,
} from './task.schema';

/**
 * Fastify router providing task related routes
 *
 * @param fastify - a first term type of FastifyInstance
 * @returns Promise type void
 */
export default async function taskRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/boards/:boardId/tasks', getTasksOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskOpts);
  fastify.post('/boards/:boardId/tasks', postTaskOpts);
  fastify.put('/boards/:boardId/tasks/:taskId', putTaskOpts);
  fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);
}
