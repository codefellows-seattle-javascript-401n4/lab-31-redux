import React from 'react';

class CardForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let defaultState = {
            title:'',
            categoryId:this.props.categoryId
        }
        this.state = this.props.card || defaultState;
    }

    handleChange(e) {
        this.setState( {[e.target.name]:e.target.value} );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handler( Object.assign({}, this.state) );
    }

    render() {
        return (
                <form className="cardForm" onSubmit={this.handleSubmit}>
                    <label>
                        <span>Expense:</span>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        <span>Amount</span>
                        <input
                            type="number"
                            name="amount"
                            value={this.state.asignee}
                            onChange={this.handleChange}
                        />
                    </label>

                    <div className="buttons">
                        <button type="submit">Save</button>
                    </div>

                </form>
        )
    }
}

export default CardForm;