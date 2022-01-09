import fastify from 'fastify';
import swagger from 'fastify-swagger';
import path from 'path';
import { logger } from './common/logger';
import { userRoutes } from './resources/users/user.router';
import { boardRoutes } from './resources/boards/board.router';
import { taskRoutes } from './resources/tasks/task.router';

const app = fastify({ logger });

process.on('uncaughtException', (err) => {
  logger.fatal(err, 'uncaughtException');
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.fatal(err, 'unhandledRejection');
  process.exit(1);
});

app.register(swagger, {
  mode: 'static',
  routePrefix: '/doc',
  exposeRoute: true,
  specification: {
    path: path.resolve(__dirname, '../doc/api.yaml'),
    baseDir: path.resolve(__dirname),
  },
});

app.addHook('preHandler', async (req) => {
  const { body } = req;
  if (body) req.log.info({ body }, 'parsed body');
});

app.register(userRoutes);
app.register(boardRoutes);
app.register(taskRoutes);

export default app;
