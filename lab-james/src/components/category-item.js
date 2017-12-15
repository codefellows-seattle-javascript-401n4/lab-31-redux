import React from 'react';

class CategoryItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h3>{this.props.category.name}</h3>
        <h3>Budget: {this.props.category.budget}</h3>
      </div>
    )
  }
}

export default CategoryItem;
