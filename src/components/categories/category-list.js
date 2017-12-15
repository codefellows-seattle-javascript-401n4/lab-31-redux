import React from 'react';
import CategoryItem from './category-item';

class CategoryList extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.cats.map((category, i)=> 
                    <CategoryItem handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} key={category.id} category={category} />)
                }
            </div>




            // <div>
            //    <ul className="listCategories">
            //        {
            //            this.props.cats.map((category, i)=> 
            //            <li key={category.id}>{category.title}{category.budget}</li>
            //         )
            //        }
            //    </ul>
            // </div>
        )
    }
}

export default CategoryList;