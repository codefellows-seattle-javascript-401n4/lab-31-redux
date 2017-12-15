import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from './category-form';
import CategoryList from './category-list';
import {categoryCreate, categoryDelete, categoryUpdate} from '../../app/actions';

class Categories extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleAdd(category){
        this.props.categoryCreate(category)
    }

    handleUpdate(category){
        this.props.categoryUpdate(category)
    }

    handleDelete(category){
        this.props.categoryDelete(category)
    }
    
    render(){
        return(
            <div className="catsContainer">
                <CategoryForm handler={this.handleAdd}/>
                <CategoryList cats={this.props.categories} handleDel={this.handleDelete} handleUpd={this.handleUpdate} />
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
    categoryDelete: category => dispatch(categoryDelete(category))
})

export default  connect(mapStateToProps, mapDispatchToProps)(Categories);