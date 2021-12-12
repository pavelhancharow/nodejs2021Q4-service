const { User } = require('./user.model');
const { deleteUser } = require('../tasks/task.memory.repository');

const users = [];

const getAll = async () => users.map(User.toResponse);

const getById = async (id) => {
  const user = await users.find((u) => u.id === id);

  if (!user) return false;

  return User.toResponse(user);
};

const create = async (body) => {
  const user = new User(body);
  users.push(user);
  return user;
};

const update = async (params, body) => {
  let idx = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === params.userId) {
      idx = i;
      users[i] = { ...users[i], ...body };
    }
  }

  if (!users[idx]) return false;

  return users[idx];
};

const remove = async (id) => {
  const idx = users.findIndex((u) => u.id === id);

  if (idx === -1) return false;

  users.splice(idx, 1);
  deleteUser(id);
  return users;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
