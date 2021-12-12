const boardsRepo = require('./board.memory.repository');

const getAll = async (req, reply) => {
  const boards = await boardsRepo.getAll();
  reply.send(boards);
};

const getById = async (req, reply) => {
  const { boardId } = await req.params;
  const board = await boardsRepo.getById(boardId);

  if (!board) reply.code(404).send({ message: 'Board not found' });

  reply.send(board);
};

const create = async (req, reply) => {
  const { body } = await req;

  const board = await boardsRepo.create(body);
  reply.code(201).send(board);
};

const update = async (req, reply) => {
  const { params, body } = await req;
  const board = await boardsRepo.update(params, body);

  if (!board) reply.code(404).send({ message: 'Board not found' });
  reply.send(board);
};

const remove = async (req, reply) => {
  const { boardId } = await req.params;
  const result = await boardsRepo.remove(boardId);

  if (!result) reply.code(404).send({ message: 'Board not found' });

  reply.code(204).send();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
