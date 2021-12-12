const usersRepo = require('./user.memory.repository');

const getAll = async (req, reply) => {
  const users = await usersRepo.getAll();
  reply.send(users);
};

const getById = async (req, reply) => {
  const { userId } = await req.params;
  const user = await usersRepo.getById(userId);

  if (!user) reply.code(404).send({ message: 'User not found' });

  reply.send(user);
};

const create = async (req, reply) => {
  const { body } = await req;

  const user = await usersRepo.create(body);
  reply.code(201).send(user);
};

const update = async (req, reply) => {
  const { params, body } = await req;
  const user = await usersRepo.update(params, body);

  if (!user) reply.code(404).send({ message: 'User not found' });
  reply.send(user);
};

const remove = async (req, reply) => {
  const { userId } = await req.params;
  const result = await usersRepo.remove(userId);

  if (!result) reply.code(404).send({ message: 'User not found' });

  reply.code(204).send();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
