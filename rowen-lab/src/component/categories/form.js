import React from 'react'

class CategoryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.category || {title: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.props.handler, this.state);
    this.props.handler( Object.assign({}, this.state));
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  render(){
    return(
      <form>
        <input
          type='text'
          name='title'
          value={this.state.title}
          placeholder='New Category'
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default CategoryForm;
