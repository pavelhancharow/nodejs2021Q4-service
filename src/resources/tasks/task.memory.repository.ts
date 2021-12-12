import { Task, ITask } from './task.model';

const tasks: ITask[] = [];

const getAll = async (boardId: string): Promise<ITask[]> => tasks.filter((task) => task.boardId === boardId);

const getById = async (boardId: string, taskId: string): Promise<ITask | boolean> => {
  const task = tasks.filter((t) => t.boardId === boardId && t.id === taskId)[0];

  if (!task) return false;

  return task;
};

const create = async (boardId: string, body: ITask): Promise<ITask> => {
  const task = new Task({ ...body, boardId });

  tasks.push(task);

  return task;
};

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

const remove = async (taskId: string): Promise<ITask[] | boolean> => {
  const idx = tasks.findIndex((t) => t.id === taskId);

  if (idx === -1) return false;

  tasks.splice(idx, 1);

  return tasks;
};

const unassignedTasks = async (userId: string): Promise<void> => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].userId === userId) {
      tasks[i] = { ...tasks[i], userId: null };
    }
  }
};

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
