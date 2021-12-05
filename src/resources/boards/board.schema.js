const { getAll, getById, create, update, remove } = require('./board.service');

const Board = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
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

const getBoardsOpts = {
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

const getBoardOpts = {
  method: 'GET',
  schema: {
    response: {
      200: Board,
    },
  },
  handler: getById,
};

const postBoardOpts = {
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

const putBoardOpts = {
  method: 'PUT',
  schema: {
    response: {
      200: Board,
    },
  },
  handler: update,
};

const deleteBoardOpts = {
  method: 'DELETE',
  handler: remove,
};

module.exports = {
  getBoardsOpts,
  getBoardOpts,
  postBoardOpts,
  putBoardOpts,
  deleteBoardOpts,
};
