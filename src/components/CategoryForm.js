import React from 'react';
import ReactDom from 'react-dom';

// newCategory(name, budget)
import newCategory from '../lib/newCategory';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
    }

    categoryName = '';
    categoryBudget = 0;

    createCategory = (event) => {
        event.preventDefault();
        this.props.addCategory(newCategory(this.categoryName, this.categoryBudget));
    }

    updateBudget = (event) => {
        this.categoryBudget = event.target.value;
    }

    setCategoryName = (event) => {
        this.categoryName = event.target.value;
    }

    render() {
        return (
            <form>
                <div>
                    Enter category name:
                    <input onChange={this.setCategoryName}></input>
                    <br />
                </div>
                <div>
                    Enter category Budget: 
                    <input onChange={this.updateBudget}></input>
                    <br />
                </div>

                <button onClick={this.createCategory}>Create Category</button>
            </form>
        )
    }
}

export default CategoryForm;