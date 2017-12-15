import React from 'react';
import CategoryForm from './category-form';

class CategoryItem extends React.Component{
    render(){
        return(
            <div className="category">

                <header>
                    <CategoryForm handler={this.props.handleUpdate} category={this.props.category} />
                    <a href="#" onClick={()=>this.props.handleDelete(this.props.category.id)}>x</a>
                </header>

            </div>
        )
    }
}

export default CategoryItem;