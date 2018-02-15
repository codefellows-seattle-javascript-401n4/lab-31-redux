import uuid from 'uuid';

export const create = (section) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    id: Math.random(),
    created: new Date(),
    name,
    budget,
  },
})

export const update = (payload) => ({
  type: 'CATEGORY_UPDATE',
  payload,
})

export const destroy = (_id) => ({
  type: 'CATEGORY_DESTROY',
  payload: _id,
})