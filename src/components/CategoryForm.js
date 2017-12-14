import React from 'react';
import ReactDom from 'react-dom';

// newCategory(name, budget)
import newCategory from '../lib/newCategory';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.category || {};
    }


    buttonClick = (event) => {
        event.preventDefault();
        this.props.handler(this.state);
    }

    updateState = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }



    render() {
        return (
            <form>
                <div>
                    Category Name
                    {
                        (this.props.buttonText === 'Create Category') ?
                        <input name="categoryName" onChange={this.updateState}></input> :
                        <input placeholder={this.props.placeholder} name="categoryUpdate" onChange={this.updateState}></input>
                    }
                    <br />
                </div>
                <div>
                    Enter category Budget: 
                    <input name="categoryBudget" onChange={this.updateState}></input>
                    <br />
                </div>

                <button onClick={this.buttonClick}>{this.props.buttonText}</button>
                {(this.props.buttonText === 'Update Category') ? <button onClick={this.props.cancel}>Cancel Update</button> : null}
            </form>
        )
    }
}

export default CategoryForm;