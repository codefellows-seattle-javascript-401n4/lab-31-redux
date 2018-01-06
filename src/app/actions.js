import uuid from 'uuid/v4';

export const categoryCreate = (category) => {

  category.id = uuid();
  category.createDate = new Date();

  return {
    type:"CATEGORY_ADD",
    payload: category
  };
};

export const categoryDelete = (_id) => {

  return {
    type:"CATEGORY_DELETE",
    payload: _id
  };

}
