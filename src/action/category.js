import uuid from 'uuid/v4';

export const create = ({name}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    id: uuid(),
    created: Date.now(), 
    name,
  },
});

export const update = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});


export const destroy = (category) => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});
