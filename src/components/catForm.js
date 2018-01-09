'use strict';

import React from 'react';
import uuid from 'uuid/v1';

class CatForm extends React.Component {
  constructor(props){
    super(props);
    console.log('in const', props)

    this.onComplete = this.onComplete.bind(this);
    this.onChangeOfName = this.onChangeOfName.bind(this);
    this.onChangeOfBudget = this.onChangeOfBudget.bind(this);
    this.onEditComplete = this.onEditComplete.bind(this);
    this.state = props.category || {
      name: '',
      budget: 0,
    };
  }

  onChangeOfName(event){
    event.preventDefault();
    this.setState({name: event.target.value});
  }
  onChangeOfBudget(event){
    event.preventDefault();
    this.setState({budget: event.target.value});
  }

  onComplete(event){
    event.preventDefault();
    console.log(this.props.handler, this.setState);
    this.setState({name: '', budget: ''});
    this.props.handler(Object.assign({},this.state));
  }

  onEditComplete(event){
    console.log(event.target);
    event.preventDefault();
    this.setState({name: '', budget: ''});
    this.props.handUp(Object.assign({}, this.state));
  }
  render(){
    console.log('sdfsdf', this.props.isEditing);
    const id = this.props.category ? this.props.category.id : null;
    return(
      <div>
        {this.props.isEditing ? (
        <form className="editForm" onSubmit={this.onEditComplete}>
          <div className="editName">Edit your budget name</div>
          <input className="editNameInput" type="text" value={this.state.name} onChange={this.onChangeOfName}/>
          <div className="editBudget">Edit your budget amount</div>
          <input type="text" value={this.state.budget} onChange={this.onChangeOfBudget}/>
          <button type="submit">Submit</button>
        </form>
)
:
(
        <form className="form" onSubmit={this.onComplete}>
          Your budget name:
          <input type="text" value={this.state.name} onChange={this.onChangeOfName}/>
          <br />
          Your budget expense:
          <input type="text" value={this.state.budget} onChange={this.onChangeOfBudget}/>
          <button type="submit">Submit</button>
        </form>
      )
    }
      </div>
    );
  }
}


export default CatForm;
