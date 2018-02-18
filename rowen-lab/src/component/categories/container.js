import React from 'react';

import {connect} from 'react-redux';

import CategoryForm from './form';
import CategoryList from './list';

import {categoryCreate, categoryUpdate, categoryDelete} from './../../app/actions';

class Categories extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id='board'>
        <CategoryForm handler = {this.props.handleAddCategory}/>
        <CategoryList handleDelete={this.props.handleDeleteCategory}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleAddCategory: category => dispatch(categoryCreate(category)),
  handleUpdateCategory: category => dispatch(categoryUpdate(category)),
  handleDeleteCategory: category => dispatch(categoryDelete(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
