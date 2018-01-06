const initialState = [];

export default (state=initialState, action) => {
  console.log('Action', action);
  let {type, payload} = action;

  switch ( type ) {

    case "CATEGORY_ADD":
      return [...state, payload];
    case "CATEGORY_DELETE":
      return state.filter( (item,i) => item.id !== payload );
    default:
      return state;
  }
}
