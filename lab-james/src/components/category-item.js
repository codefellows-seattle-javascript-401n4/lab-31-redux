import React from 'react';
import CategoryForm from './category-form.js';

class CategoryItem extends React.Component {

  constructor(props){
    super(props);

    this.showUpdate = this.showUpdate.bind(this);
    this.hideUpdate = this.hideUpdate.bind(this);
  }

  showUpdate(e){
    let ele = document.getElementById(this.props.category.id);
    ele.setAttribute("class", '');
  }

  hideUpdate(id){
    let ele = document.getElementById(id);
    ele.setAttribute("class", 'hide');
  }

  render(){
    return(
      console.log(this.props.category),
      <div className="category" onDoubleClick={this.showUpdate}>
        <h3>{this.props.category.name}</h3>
        <h3>Budget: {this.props.category.budget}</h3>
        <div className="hide" id={this.props.category.id}>
          <CategoryForm handler={this.props.updateCat} category={this.props.category} hideUpdate={this.hideUpdate}/>
        </div>
        <button type="button" onClick={() => this.props.deleteCat(this.props.category.id)}>Delete</button>
      </div>
    )
  }
}

export default CategoryItem;
