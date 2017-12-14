import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import * as category from '../../action/category.js';


class Dashboard extends React.Component{
  
  componentDidUpdate(){
    console.log(this.props.categories);
  };
 
  render(){
    return(
    <div className='dashboard'>
      <h1> goozgooz welcomes you </h1>
      <CategoryForm onComplete={this.props.categoryCreate}/>
      {this.props.categories.map((category,i) => 
        <div key={category.id}>
          <h2> {category.name} </h2>
          <button onClick={() => this.props.categoryRemove(category)}> X </button>
          <CategoryForm category={category} onComplete={this.props.categoryUpdate} />
        </div>
      )}
    </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    categories: state || [],
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(category.create(data)),
    categoryUpdate: (data) => dispatch(category.update(data)),
    categoryRemove: (data) => dispatch(category.destroy(data)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
