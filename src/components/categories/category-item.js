import React from 'react';

import CategoryForm from './category-form';

class CategoryItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log("in item props::::",   this.props);
        return(
            <div className="category">
                <header>
                    <CategoryForm handler={this.props.handleUpd} category={this.props.category} />
                    <a href="#" onClick={()=>this.props.handleDel(this.props.category)}>x</a>
                </header>


            </div>
        )
    }
}

export default CategoryItem;