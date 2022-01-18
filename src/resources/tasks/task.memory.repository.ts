import { getRepository } from 'typeorm';
import { Task } from './task.model';

/**
 * Gets the array of objects type of ITask
 *
 * @param boardId - a first term string
 * @returns Promise array of objects type of ITask
 */
const getAll = async (boardId: string): Promise<Task[]> => {
  const tasks = await getRepository(Task).find({
    where: { boardId },
    loadRelationIds: true,
  });

  return tasks;
};

/**
 * Gets by id the object type of ITask or boolean value
 *
 * @param boardId - a first term string
 * @param taskId - a second term string
 * @returns Promise object type of ITask or boolean value
 */
const getById = async (
  boardId: string,
  taskId: string
): Promise<Task | boolean> => {
  const task = await getRepository(Task).findOne(taskId, {
    where: { boardId },
    loadRelationIds: true,
  });

  if (!task) return false;

  return task;
};

/**
 * Creates new object type of ITask
 *
 * @param boardId - a first term string
 * @param body - a second term type of ITask
 * @returns Promise new object type of ITask
 */
const create = async (boardId: string, body: Task): Promise<Task> => {
  const task = await getRepository(Task).save({ ...body, boardId });

  return task;
};

/**
 * Updates object type of ITask
 *
 * @param taskId - a first term string
 * @param body - a second term object type of ITask
 * @returns Promise updated object type of ITask
 */
const update = async (taskId: string, body: Task): Promise<Task | boolean> => {
  const task = await getRepository(Task).findOne(taskId);

  if (task) {
    const updatedTask = await getRepository(Task).save({ ...body, taskId });
    return updatedTask;
  }

  return false;
};

/**
 * Removes the object from the array of objects type of ITask
 *
 * @param taskId - a first term string
 * @returns Promise array of objects type of ITask or boolean value
 */
const remove = async (taskId: string): Promise<boolean> => {
  const task = await getRepository(Task).findOne(taskId);

  if (!task) return false;

  await getRepository(Task).delete(taskId);

  return true;
};

export = {
  getAll,
  getById,
  create,
  update,
  remove,
};
