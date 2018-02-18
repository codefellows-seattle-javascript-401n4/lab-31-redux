import uuid from 'uuid/v4';

module.exports = {
  categoryCreate: (category)=>{
    category.id=uuid();
    category.created = new Date();

    return{
      type:'CATEGORY_ADD',
      payload: category
    }
  },
  categoryUpdate: (catagory)=>{
    return{
      type:'CATEGORY_UPDATE',
      payload: category
    }
  },
  categoryDelete: (catagory)=>{
    return{
      type:'CATEGORY_DESTROY',
      payload: category
    }
  },
}
