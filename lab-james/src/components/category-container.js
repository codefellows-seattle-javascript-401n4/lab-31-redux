import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from './category-form.js';
import CategoryList from './category-list.js';

import {createCategory, updateCategory, deleteCategory} from '../app/actions.js';

class CategoryContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div id="mainCatForm">
          <h3>New Budget</h3>
          <CategoryForm handler={this.props.handleCreateCategory} />
        </div>
        <CategoryList categories={this.props.categories} updateCat={this.props.handleUpdateCategory} deleteCategory={this.props.handleDeleteCategory}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCreateCategory: category => dispatch(createCategory(category)),
  handleUpdateCategory: category => dispatch(updateCategory(category)),
  handleDeleteCategory: category => dispatch(deleteCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
