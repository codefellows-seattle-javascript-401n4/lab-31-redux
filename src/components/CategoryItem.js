import React from 'react';
import ReactDom from 'react-dom';

import CategoryForm from './CategoryForm';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    componentWillMount() {
        this.setState({editing :false});
    }

    handleClick = (event) => {
        this.props.deleteCategory(this.state.category.id);
    }
    toggleEditing = (event) => {
        this.setState({editing: !this.state.editing});
    }

    handleUpdate = (newCategoryName) => {
        this.props.updateCategory({id: newCategoryName.id, update: newCategoryName.categoryUpdate});
        this.toggleEditing();
    }

    render() {
        return (
            <div>
                <p>Category name: {this.state.category.name}</p>
                <p>Category Budget: {this.state.category.budget}</p>
                <button onClick={this.handleClick}>Delete Category</button>
                {
                    (this.state.editing) ?
                        <CategoryForm category={this.state.category} placeholder={this.state.category.name} cancel={this.toggleEditing} handler={this.handleUpdate} buttonText={"Update Category"}/> : 
                        <button onClick={this.toggleEditing}>Edit Category</button>

                }

        </div>
        )
    }
}

export default CategoryItem;