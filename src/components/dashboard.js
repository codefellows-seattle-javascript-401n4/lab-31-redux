'use strict';

import React from 'react';

import {connect} from 'react-redux';

import CatForm from './catForm.js';
import CatItem from './catItem.js';

import {catCreate,catUpdate,catDelete} from '../actions/actionCreate.js';

class Categories extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id='board'>
        <CatForm handler={this.props.handleAddCategory}/>
        <CatItem handleDelete={this.props.handleDeleteCategory} handlerUp={this.props.handleUpdateCategory} cats={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories : state,
});

const mapDispatchToProps = (dispatch, getState ) => ({
  handleAddCategory: category => dispatch(catCreate(category)),
  handleUpdateCategory: category => dispatch(catUpdate(category)),
  handleDeleteCategory: category => dispatch(catDelete(category)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
