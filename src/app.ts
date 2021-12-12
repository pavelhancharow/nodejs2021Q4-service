import fastify, { FastifyPluginOptions } from 'fastify';
import swagger from 'fastify-swagger';
import path from 'path';
import userRoutes from './resources/users/user.router';
// import boardRoutes from './resources/boards/board.router';
// import taskRoutes from './resources/tasks/task.router';

const app = fastify();

app.register<FastifyPluginOptions>(swagger, {
  mode: 'static',
  routePrefix: '/doc',
  specification: {
    path: path.resolve(__dirname, '../doc/api.yaml'),
  },
  host: 'localhost',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  exposeRoute: true,
});

app.register(userRoutes);
// app.register(boardRoutes);
// app.register(taskRoutes);

export default app;
