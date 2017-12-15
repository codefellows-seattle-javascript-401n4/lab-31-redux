import React from 'react';

class CategoryForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      budget: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createCat(Object.assign({}, this.state));
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:
          <input type="text" id="name" onChange={this.handleChange} />
        </label>
        <label htmlFor="budget">Budget:
          <input type="number" id="budget" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CategoryForm;
