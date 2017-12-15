import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from './category-form';
import CategoryList from './category-list';
import {categoryCreate, categoryDelete, categoryUpdate} from '../../app/actions';

class Categories extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(category){
        this.props.categoryCreate(category)
    }

    render(){
        return(
            <div className="catsContainer">
                <CategoryForm handler={this.handleAdd}/>
                <CategoryList cats={this.props.categories} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories:state
})

const mapDispatchToProps = (dispatch, getState)=>({
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryUpdate(category))
})

export default  connect(mapStateToProps, mapDispatchToProps)(Categories);