const {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  deleteBoardOpts,
  putBoardOpts,
} = require('./board.schema');

function boardRoutes(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.put('/boards/:boardId', putBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);

  done();
}

module.exports = boardRoutes;
