const {
  getTasksOpts,
  getTaskOpts,
  postTaskOpts,
  putTaskOpts,
  deleteTaskOpts,
} = require('./task.schema');

async function taskRoutes(fastify, options, done) {
  fastify.get('/boards/:boardId/tasks', getTasksOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskOpts);
  fastify.post('/boards/:boardId/tasks', postTaskOpts);
  fastify.put('/boards/:boardId/tasks/:taskId', putTaskOpts);
  fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);

  done();
}

module.exports = taskRoutes;
