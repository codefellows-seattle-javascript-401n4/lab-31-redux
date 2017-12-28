'use strict';
import React from 'react';
import CatItem from './catItem.js';
import {connect} from 'react-redux';
class Edit extends React.Component {
  constructor(props){
    super(props);


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: this.props.name,
      budget: this.props.budget,
    };
  }

  componentDidMount(){
    this.setState = ({
      name: this.props.name,
      budget: this.props.budget,
    });
  }

  handleChange(event){
    this.setState = ({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handlerUp(Object.assign({}, this.props.category));
  }

  render(){
    console.log(this.props.category);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.defaultValue} onChange={this.handleChange} name='name'/>
          <input type="text" value={this.defaultValue} onChange={this.handleChange} name='budget'/>
          <button type="submit" onClick={this.props.handlerUp}>Submit</button>
          <button onClick={this.props.editToggle}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default Edit;
