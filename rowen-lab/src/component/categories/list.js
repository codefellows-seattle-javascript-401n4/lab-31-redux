import React from 'react';
import {connect} from 'react-redux';
import CategoryItem from './item';

class CategoryList extends React.Component {
    render() {
        return (
            <div id="categories">
                {
                  this.props.category.map( (category, i) =>
                        <CategoryItem
                        handleDelete={this.props.handleDelete}
                        handleUpdate={this.props.handleUpdate}
                        key={category.id}
                        category={category} />)
                }
            </div>
        )
    }
}

export default CategoryList;
