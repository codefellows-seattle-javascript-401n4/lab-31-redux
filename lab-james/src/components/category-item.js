import React from 'react';
import CategoryForm from './category-form.js';

class CategoryItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      console.log(this.props.category),
      <div>
        <h3>{this.props.category.name}</h3>
        <h3>Budget: {this.props.category.budget}</h3>
        <CategoryForm />
      </div>
    )
  }
}

export default CategoryItem;
