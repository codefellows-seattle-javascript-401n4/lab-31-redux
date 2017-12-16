const initialState = {};

export default (state=initialState, action) => {
    switch(type){

        case "ADD_CATEGORY":
            return {...state, [payload.id]:[]};
        case ADD_CARD:
            return {};
        case "DELETE_CATEGORY":
            return {};
        case "DELETE_CARD":
            return{};
        case "UPDATE_CARD":
            return{};
        default:
            return {state} 
    }
}