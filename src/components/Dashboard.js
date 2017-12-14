import React from 'react';
import ReactDom from 'react-dom';

import {connect} from 'react-redux';

import {category_create, category_update, category_delete} from '../actions/category-action';

import CategoryForm from './CategoryForm.js';
import CategoryItem from './CategoryItem.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    renderCategoryItem = () => {
        return this.props.categories.categories.map(category => {
           return <CategoryItem updateCategory={this.props.updateCategory} deleteCategory={this.props.deleteCategory} key={category.id} category={category}/>;
        });
    }

    render() {
        return (
            <div>
                <CategoryForm placeHolder={''} category={{}} buttonText={"Create Category"} handler={this.props.addCategory}/>
                {this.renderCategoryItem()}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
    addCategory: category => dispatch(category_create(category)),
    updateCategory: category => dispatch(category_update(category)),
    deleteCategory: category => dispatch(category_delete(category))
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);