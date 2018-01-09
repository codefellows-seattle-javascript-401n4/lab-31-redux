'use strict';

import React from 'react';
import CatForm from './catForm.js';
import uuid from 'uuid/v1';

class CatItem extends React.Component {
  constructor(props){
    super(props);
    this.editToggle = this.editToggle.bind(this);
    this.state = {
      isEditing:false,
    };
  }

  editToggle(event){
    event.preventDefault();
    this.setState({isEditing: !this.state.isEditing});
  }

  render(){
    console.log('PROPS IN ITEM', this.props);
    return(
      <div className='category'>
        <ul>

          {
            this.props.cats.map( (category,i) =>
              <li key={category.id} category={category}>
                {this.state.isEditing ? (
                  <CatForm isEditing={this.state.isEditing} handUp={this.props.handUp} handler={this.props.handler} category={category}/>
                ) : null
                }
                {this.state.isEditing ? (
                  <button type="submit" onClick={this.editToggle}>cancel</button>
                ) : null
                }
                <div className="nameLi">
                {this.state.isEditing ? null : (
                  <h1 className="itemHeader">Budgeting For </h1>
                )
                }
                  <h2>{category.name}</h2>
                  </div>
                  <br/>
                  {this.state.isEditing ? null : (
                  <button type="submit" onClick={this.editToggle}>edit</button>
                )
                }
                <br />
            Budget: $
                {category.budget}
                <br />
                {this.state.isEditing ? null : (
                <button onClick={() => this.props.handleDelete(category.id)} type="submit">Delete!</button>
              )}
              </li>
            )
          }
        </ul>

      </div>
    );
  }
}

export default CatItem;
