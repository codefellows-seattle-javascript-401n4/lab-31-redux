import uuid from 'uuid/v4';

export const cardCreate = (card) => {

    card.id = uuid();
    card.createDate = new Date();

    return {
        type:"ADD_CARD",
        payload: card
    };

};

export const cardDelete = (card) => {
    return {
        type:"DELETE_CARD",
        payload: card
    }
}

export const cardUpdate = (card) => {
    return {
        type:"UPDATE_CARD",
        payload: card
    }
}