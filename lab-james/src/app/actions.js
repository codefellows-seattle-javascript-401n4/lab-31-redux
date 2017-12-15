import uuid from 'uuid/v4';

export const createCategory = category => {
  category.id = uuid();
  category.createDate = new Date();

  return {
    type: 'CATEGORY_ADD',
    payload: category,
  };
};
