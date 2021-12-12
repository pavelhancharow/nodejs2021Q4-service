import { getAll, getById, create, update, remove } from './board.service';

const Board = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    columns: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          order: { type: 'number' },
        },
      },
    },
  },
};

export const getBoardsOpts = {
  method: 'GET',
  schema: {
    response: {
      200: {
        type: 'array',
        items: Board,
      },
    },
  },
  handler: getAll,
};

export const getBoardOpts = {
  method: 'GET',
  schema: {
    response: {
      200: Board,
    },
  },
  handler: getById,
};

export const postBoardOpts = {
  method: 'POST',
  schema: {
    body: {
      type: 'object',
      required: ['title', 'columns'],
      properties: {
        title: { type: 'string' },
        columns: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              order: { type: 'number' },
            },
          },
        },
      },
    },
    response: {
      201: Board,
    },
  },
  handler: create,
};

export const putBoardOpts = {
  method: 'PUT',
  schema: {
    response: {
      200: Board,
    },
  },
  handler: update,
};

export const deleteBoardOpts = {
  method: 'DELETE',
  handler: remove,
};
