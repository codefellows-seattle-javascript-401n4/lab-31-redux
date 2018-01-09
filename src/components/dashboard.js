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
    console.log(this.props);
    return(
      <div id='board'>
        <div className="siteHeader">
        Online Bank Ledger
        <div className="inputForm">
        <CatForm handler={this.props.handleAddCategory} handUp={this.props.handleUpdateCategory}/>
        </div>
        </div>
        <CatItem handler={this.props.handleAddCategory} handUp={this.props.handleUpdateCategory} handleDelete={this.props.handleDeleteCategory} cats={this.props.categories}/>
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
