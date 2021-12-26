import { getAll, getById, create, update, remove } from './user.service';

const User = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' },
  },
};

export const getUsersOpts = {
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

export const getUserOpts = {
  method: 'GET',
  schema: {
    response: {
      200: User,
    },
  },
  handler: getById,
};

export const postUserOpts = {
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

export const putUserOpts = {
  method: 'PUT',
  schema: {
    response: {
      200: User,
    },
  },
  handler: update,
};

export const deleteUserOpts = {
  method: 'DELETE',
  handler: remove,
};
