import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from './category-form.js';
import CategoryList from './category-list.js';

import {createCategory} from '../app/actions.js';

class CategoryContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <CategoryForm createCat={this.props.handleCreateCategory}/>
        <CategoryList categories={this.props.categories}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCreateCategory: category => dispatch(createCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
