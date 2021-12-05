const { getAll, getById, create, update, remove } = require('./user.service');

const User = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    name: { type: 'string' },
    login: { type: 'string' },
  },
};

const getUsersOpts = {
  method: 'GET',
  schema: {
    response: {
      200: {
        type: 'array',
        items: User,
      },
    },
  },
  handler: getAll,
};

const getUserOpts = {
  method: 'GET',
  schema: {
    response: {
      200: User,
    },
  },
  handler: getById,
};

const postUserOpts = {
  method: 'POST',
  schema: {
    body: {
      type: 'object',
      required: ['name', 'login', 'password'],
      properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      201: User,
    },
  },
  handler: create,
};

const putUserOpts = {
  method: 'PUT',
  schema: {
    response: {
      200: User,
    },
  },
  handler: update,
};

const deleteUserOpts = {
  method: 'DELETE',
  handler: remove,
};

module.exports = {
  getUsersOpts,
  getUserOpts,
  postUserOpts,
  putUserOpts,
  deleteUserOpts,
};
