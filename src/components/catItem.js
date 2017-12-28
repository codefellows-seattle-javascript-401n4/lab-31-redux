'use strict';

import React from 'react';
import CatForm from './catForm.js';
import Edit from './edit.js';

class CatItem extends React.Component {
  constructor(props){
    super(props);
    this.editToggle = this.editToggle.bind(this);
    this.state = {
      isEditing: false,
    };
  }

  editToggle(event){
    event.preventDefault();
    this.setState({isEditing: !this.state.isEditing});
  }

  render(){
    return(
      <div className='category'>
        <ul>
          {
            this.props.cats.map( (category,i) =>
              <li key={category.id} category={category}>
                <h3>
                  {this.state.isEditing === true &&
                <Edit editToggle={this.editToggle} handlerUp={this.props.handleUpdateCategory} name={category.name} budget={category.budget} category={category}/> 
                  }
                  {category.name}
                  <br/>
                  <button type="submit" onClick={this.editToggle}>edit</button>
                </h3>
                <br />
            Budget: $
                {category.budget}
                <br />
                <button onClick={() => this.props.handleDelete(category.id)} type="submit">Delete!</button>
              </li>
            )
          }
        </ul>

      </div>
    );
  }
}

export default CatItem;
