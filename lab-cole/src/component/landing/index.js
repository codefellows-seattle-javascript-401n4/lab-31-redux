import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import * as category from '../../action/category.js';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='landing'>
        <CategoryForm onComplete={CategoryForm} />
        {state.map((state) => 
          <div>
            <h2> {category.title} </h2>
            <button onClick={() => categoryRemove(category)}> Delete </button>
            <CategoryForm category={category} onComplete={scategoryUpdate} />
          </div>
        )}
      </div>
    )
  }
}

export default connect()(Landing)