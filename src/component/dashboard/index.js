import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import * as category from '../../action/category.js';


class Dashboard extends React.Component{
  
  componentDidUpdate(){
    console.log(this.props.state);
  };
 
  render(){
    return(
    <div className='dashboard'>
      <h1> goozgooz welcomes you </h1>
      <CategoryForm onComplete={this.props.categoryCreate}/>
    </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    state: state,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(category.create(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
