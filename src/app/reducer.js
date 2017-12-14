const initialState = [];


export default (state=initialState, action) => {

    let {type, payload} = action;
    switch(type){
        case 'ADD_CATEGORY':
            return [... state, payload]
        default: return state;
    }

}
