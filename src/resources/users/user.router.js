const {
  getUsersOpts,
  getUserOpts,
  postUserOpts,
  putUserOpts,
  deleteUserOpts,
} = require('./user.schema');

async function userRoutes(fastify, options, done) {
  fastify.get('/users', getUsersOpts);
  fastify.get('/users/:userId', getUserOpts);
  fastify.post('/users', postUserOpts);
  fastify.put('/users/:userId', putUserOpts);
  fastify.delete('/users/:userId', deleteUserOpts);

  done();
}

module.exports = userRoutes;
