const tasksRepo = require('./task.memory.repository');

const getAll = async (req, reply) => {
  const { boardId } = await req.params;

  const tasks = await tasksRepo.getAll(boardId);
  reply.send(tasks);
};

const getById = async (req, reply) => {
  const { boardId, taskId } = await req.params;
  const task = await tasksRepo.getById(boardId, taskId);

  if (!task) reply.code(404).send({ message: 'Task not found' });

  reply.send(task);
};

const create = async (req, reply) => {
  const { params, body } = await req;

  const task = await tasksRepo.create(params, body);
  reply.code(201).send(task);
};

const update = async (req, reply) => {
  const { params, body } = req;

  const task = await tasksRepo.update(params, body);

  if (!task) reply.code(404).send({ message: 'Task not found' });

  reply.send(task);
};

const remove = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const result = await tasksRepo.remove(boardId, taskId);

  if (!result) reply.code(404).send({ message: 'Task not found' });

  reply.code(204).send();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
