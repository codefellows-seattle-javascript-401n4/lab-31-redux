import './_category-create-form.scss';
import React from 'react';
import uuid from 'uuid';

let emptyState  = {
  name: '',
  budget: ''
}

class CategoryForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.category || emptyState//should I do this.props.category state here, if we are supposed to be using a category item to show the state?

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleBudgetChange = this.handleBudgetChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }

  handleNameChange(e){
    let {value} = e.target
    this.setState({name: value})
  }

  handleBudgetChange(e){
    let {value} = e.target
    this.setState({budget: value})
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category)
      this.setState(nextProps.category)
  }

  render() {
    let buttonText = this.props.category ? 'Update Category': 'Create Category'

    return (
      <form onSubmit={this.handleSubmit} className='category-form'>

        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleNameChange}
          />

        <input
          type='number'
          name='budget'
          placeholder='budget'
          value={this.state.budget}
          onChange={this.handleBudgetChange}
          /> 

        <button type='submit'> {buttonText} </button>

      </form>
    )
  }
}

export default CategoryForm