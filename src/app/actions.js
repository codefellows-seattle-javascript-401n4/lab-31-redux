import uuid from 'uuid/v4';

export const categoryCreate = (category) => {
  category.id = uuid();
  category.createDate = new Date();

}
