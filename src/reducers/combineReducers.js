import { combineReducers } from 'redux'

import categoryReducer from './category-reducer';

const category = combineReducers({
  categories: categoryReducer
})

export default category;