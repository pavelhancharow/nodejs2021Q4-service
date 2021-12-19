import { Task, ITask } from './task.model';

const tasks: ITask[] = [];

/**
 * Gets the array of objects type of ITask
 *
 * @param boardId - a first term string
 * @returns Promise array of objects type of ITask
 */
const getAll = async (boardId: string): Promise<ITask[]> => tasks.filter((task) => task.boardId === boardId);

/**
 * Gets by id the object type of ITask or boolean value
 *
 * @param boardId - a first term string
 * @param taskId - a second term string
 * @returns Promise object type of ITask or boolean value
 */
const getById = async (boardId: string, taskId: string): Promise<ITask | boolean> => {
  const task = tasks.find((t) => t.boardId === boardId && t.id === taskId);

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
const create = async (boardId: string, body: ITask): Promise<ITask> => {
  const task = new Task({ ...body, boardId });

  tasks.push(task);

  return task;
};

/**
 * Updates object type of ITask
 *
 * @param taskId - a first term string
 * @param body - a second term object type of ITask
 * @returns Promise updated object type of ITask
 */
const update = async (taskId: string, body: ITask): Promise<ITask> => {
  let idx = NaN;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      idx = i;
      tasks[i] = { ...tasks[i], ...body };
    }
  }

  return tasks[idx];
};

/**
 * Removes the object from the array of objects type of ITask
 *
 * @param taskId - a first term string
 * @returns Promise array of objects type of ITask or boolean value
 */
const remove = async (taskId: string): Promise<ITask[] | boolean> => {
  const idx = tasks.findIndex((t) => t.id === taskId);

  if (idx === -1) return false;

  tasks.splice(idx, 1);

  return tasks;
};

/**
 * Updates property in object type of ITask
 *
 * @param userId - a first term string
 * @returns Promise type void
 */
const unassignedTasks = async (userId: string): Promise<void> => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].userId === userId) {
      tasks[i] = { ...tasks[i], userId: null };
    }
  }
};

/**
 * Removes the object from the array of objects type of ITask
 *
 * @param boardId - a first term string
 * @returns Promise type void
 */
const deleteRelatedTasks = async (boardId: string): Promise<void> => {
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    if (tasks[i].boardId === boardId) tasks.splice(i, 1)
  }
};

export = {
  getAll,
  getById,
  create,
  update,
  remove,
  unassignedTasks,
  deleteRelatedTasks,
};
