import React from 'react';

import {connect} from 'react-redux';

import CategoryCreate from './category-create';
import CategoryDisplay from './category-display';
import CategoryUpdate from './category-update';
import {categoryCreate, categoryDelete, categoryToggle, categoryUpdate} from '../../app/actions';


class Categories extends React.Component {

  constructor(props) {
    super(props);
  }

  categoryRender = () => {
    return this.props.categories.map( (category,i) => {
      return (category.updating) ?
      <CategoryUpdate key={i} category={category} update={this.props.updateCategory} toggle={this.props.categoryToggle} /> :
      <CategoryDisplay key={i} category={category} deleteCategory={this.props.deleteCategory} toggle={this.props.categoryToggle} />
    } )
  }

  render() {
    return (
      <div>
        <CategoryCreate createCategory={this.props.createCategory}/>
        {this.categoryRender()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  createCategory: category => dispatch(categoryCreate(category)),
  deleteCategory: _id => dispatch(categoryDelete(_id)),
  categoryToggle: _id => dispatch(categoryToggle(_id)),
  updateCategory: payload => dispatch(categoryUpdate(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
