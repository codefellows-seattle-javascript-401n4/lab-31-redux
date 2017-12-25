const initialState = [];

/*
it'll look like:
{
  id: xxxx,
  createDate: 11/11/1111,
  title: ''
}
*/
export default(state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CATEGORY':
      return [...state, payload];
    default:
      return state;
  }
};
