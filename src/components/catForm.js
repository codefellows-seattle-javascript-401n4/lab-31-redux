'use strict';

import React from 'react';

class CatForm extends React.Component {
  constructor(props){
    super(props);

    this.onComplete = this.onComplete.bind(this);
    this.onChangeOfName = this.onChangeOfName.bind(this);
    this.onChangeOfBudget = this.onChangeOfBudget.bind(this);


    this.state = this.props.category || {
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

  render(){
    return(
      <div>
        <form className="form" onSubmit={this.onComplete}>
          <input type="text" value={this.state.name} onChange={this.onChangeOfName}/>
          <input type="text" value={this.state.budget} onChange={this.onChangeOfBudget}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default CatForm;
