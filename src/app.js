const fastify = require('fastify')({ logger: true });
const swagger = require('fastify-swagger');
const path = require('path');
const userRoutes = require('./resources/users/user.router');
const boardRoutes = require('./resources/boards/board.router');
const taskRoutes = require('./resources/tasks/task.router');

fastify.register(swagger, {
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

fastify.register(userRoutes);
fastify.register(boardRoutes);
fastify.register(taskRoutes);

module.exports = fastify;
