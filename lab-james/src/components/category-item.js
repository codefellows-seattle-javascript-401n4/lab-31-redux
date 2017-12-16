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
        <CategoryForm handler={this.props.updateCat} category={this.props.category}/>
        <button type="button" onClick={() => this.props.deleteCat(this.props.category.id)}>Delete</button>
      </div>
    )
  }
}

export default CategoryItem;
