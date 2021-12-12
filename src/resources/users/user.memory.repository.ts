import { User, IUser } from './user.model';
import taskRepo from '../tasks/task.memory.repository';

const users: IUser[] = [];

/**
 * Gets the array of objects type of IUser
 *
 * @returns Array of objects type of IUser
 */
const getAll = async (): Promise<IUser[]> => users.map(User.toResponse);

/**
 * Gets by id the object type of IUser or boolean value
 *
 * @param userId - a first term string
 * @returns Object type of IUser or boolean value
 */
const getById = async (userId: string): Promise<IUser | boolean> => {
  const user = users.find((u) => u.id === userId);

  if (!user) return false;

  return User.toResponse(user);
};

/**
 * Creates new object type of IUser
 *
 * @param body - a first term type of IUser
 * @returns New object type of IUser
 */
const create = async (body: IUser): Promise<IUser> => {
  const user = new User(body);

  users.push(user);

  return User.toResponse(user);
};

/**
 * Updates object type of IUser
 *
 * @param userId - a first term string
 * @param body - a second term object type of IUser
 * @returns Updated object type of IUser
 */
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

/**
 * Removes the object from the array of objects type of IUser
 *
 * @param userId - a first term string
 * @returns Array of objects type of IUser or boolean value
 */
const remove = async (userId: string): Promise<IUser[] | boolean> => {
  const idx = users.findIndex((u) => u.id === userId);

  if (idx === -1) return false;

  await taskRepo.unassignedTasks(userId);
  users.splice(idx, 1);

  return users;
};

export = {
  getAll,
  getById,
  create,
  update,
  remove,
};
