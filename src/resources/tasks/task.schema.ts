import { getAll, getById, create, update, remove } from './task.service';

const TaskProps = {
  id: { type: 'string' },
  title: { type: 'string' },
  order: { type: 'number' },
  description: { type: 'string' },
  userId: { type: ['string', 'null'] },
  boardId: { type: ['string', 'null'] },
  columnId: { type: ['string', 'null'] },
};

const Task = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
    description: { type: 'string' },
    userId: { type: ['string', 'null'] },
  },
};

export const getTasksOpts = {
  method: 'GET',
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: TaskProps,
        },
      },
    },
  },
  handler: getAll,
};

export const getTaskOpts = {
  method: 'GET',
  schema: {
    response: {
      200: TaskProps,
    },
  },
  handler: getById,
};

export const postTaskOpts = {
  method: 'POST',
  schema: {
    body: {
      type: 'object',
      required: ['title', 'order', 'description', 'userId', 'boardId'],
      properties: TaskProps,
    },
  },
  handler: create,
};

export const putTaskOpts = {
  method: 'PUT',
  schema: {
    body: {
      type: 'object',
      required: [
        'title',
        'order',
        'description',
        'userId',
        'boardId',
        'columnId',
      ],
      properties: TaskProps,
    },
    response: {
      200: Task,
    },
  },
  handler: update,
};

export const deleteTaskOpts = {
  method: 'DELETE',
  handler: remove,
};
