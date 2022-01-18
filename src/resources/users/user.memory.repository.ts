import { getRepository } from 'typeorm';
import { User } from './user.model';

/**
 * Gets the array of objects type of User
 *
 * @returns Promise array of objects type of User
 */
const getAll = async (): Promise<User[]> => getRepository(User).find();

/**
 * Gets by id the object type of User or boolean value
 *
 * @param userId - a first term string
 * @returns Promise object type of User or boolean value
 */
const getById = async (userId: string): Promise<User | boolean> => {
  const user = await getRepository(User).findOne(userId);

  if (!user) return false;

  return user;
};

/**
 * Creates new object type of User
 *
 * @param body - a first term type of User
 * @returns Promise new object type of User
 */
const create = async (body: User): Promise<User> => {
  const user = await getRepository(User).save(body);

  return user;
};

/**
 * Updates object type of User
 *
 * @param userId - a first term string
 * @param body - a second term object type of User
 * @returns Promise updated object type of User
 */
const update = async (userId: string, body: User): Promise<User | boolean> => {
  const user = await getRepository(User).findOne(userId);

  if (user) {
    const updateUser = await getRepository(User).save({ ...user, ...body });

    return updateUser;
  }

  return false;
};

/**
 * Removes the object from the array of objects type of User
 *
 * @param userId - a first term string
 * @returns Promise array of objects type of User or boolean value
 */
const remove = async (userId: string): Promise<boolean> => {
  const user = await getRepository(User).findOne(userId);

  if (!user) return false;

  await getRepository(User).delete(userId);

  return true;
};

export = {
  getAll,
  getById,
  create,
  update,
  remove,
};
