import fastify from 'fastify';
import swagger from 'fastify-swagger';
import path from 'path';
import userRoutes from './resources/users/user.router';
import boardRoutes from './resources/boards/board.router';
import taskRoutes from './resources/tasks/task.router';

const app = fastify();

app.register(swagger, {
  mode: 'static',
  routePrefix: '/doc',
  exposeRoute: true,
  specification: {
    path: path.resolve(__dirname, '../doc/api.yaml'),
    baseDir: path.resolve(__dirname)
  },
});

app.register(userRoutes);
app.register(boardRoutes);
app.register(taskRoutes);

export default app;
