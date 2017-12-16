import React from 'react';

import CardForm from './card-form';
import Card from './card';
class CardList extends React.Component {

    render() {
        let categoryId = this.props.categoryId;
        let cards = this.props.cards[categoryId];
        return (

            <div className="cards">
             
                
            </div>
        )
    }
}

export default CardList;