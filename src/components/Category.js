import React from 'react';
import ReactDom from 'react-dom';

import {connect} from 'react-redux';

import {category_create, category_update, category_delete} from '../actions/category-action';

import CategoryForm from './CategoryForm.js';
import CategoryList from './CategoryList.js';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CategoryForm addCategory={this.props.addCategory}/>
                <CategoryList categories={this.props.categories.categories}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Category);