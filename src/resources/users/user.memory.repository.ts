import { User, IUser } from './user.model';
// const { deleteUser } = require('../tasks/task.memory.repository');

const users: IUser[] = [];

const getAll = async (): Promise<IUser[]> => users.map(User.toResponse);

const getById = async (userId: string): Promise<IUser | boolean> => {
  const user = users.find((u) => u.id === userId);

  if (!user) return false;

  return User.toResponse(user);
};

const create = async (body: IUser): Promise<IUser> => {
  const user = new User(body);

  users.push(user);

  return User.toResponse(user);
};

const update = async (userId: string, body: IUser): Promise<IUser> => {
  let idx = NaN;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      idx = i;
      users[i] = { ...users[i], ...body };
    }
  }

  return User.toResponse(users[idx]);
};

const remove = async (userId: string): Promise<IUser[] | boolean> => {
  const idx = users.findIndex((u) => u.id === userId);

  if (idx === -1) return false;

  users.splice(idx, 1);
  // deleteUser(id);

  return users;
};

export = {
  getAll,
  getById,
  create,
  update,
  remove,
};
