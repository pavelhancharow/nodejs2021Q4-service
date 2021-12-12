const { Task } = require('./task.model');

const tasks = [];

const getAll = async (id) => tasks.filter((task) => task.boardId === id);

const getById = async (boardId, taskId) => {
  const task = tasks.filter((t) => t.boardId === boardId && t.id === taskId)[0];

  if (!task) return false;

  return task;
};

const create = async (params, body) => {
  const { boardId } = params;
  const task = new Task({ ...body, boardId });
  tasks.push(task);
  return task;
};

const update = async (params, body) => {
  let idx = null;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === params.taskId) {
      idx = i;
      tasks[i] = { ...tasks[i], ...body };
    }
  }

  if (!tasks[idx]) return false;

  return tasks[idx];
};

const remove = async (boardId, taskId) => {
  let idx = null;
  const result = tasks.findIndex((t) => t.boardId === boardId);

  if (result !== -1) {
    idx = tasks.findIndex((t) => t.id === taskId);
  }

  if (idx === -1 || result === -1) return false;

  tasks.splice(idx, 1);
  return tasks;
};

const deleteUser = (userId) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].userId === userId) {
      tasks[i] = { ...tasks[i], userId: null };
    }
  }
};

const deleteTask = async (boardId) => {
  let idx = null;
  idx = tasks.findIndex((t) => t.boardId === boardId);
  tasks.splice(idx, 1);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  deleteUser,
  deleteTask,
};
