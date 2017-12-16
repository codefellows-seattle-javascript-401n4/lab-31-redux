const initialState = [];

/*
    [
      {
        id: xxxx,
        createDate: 11/11/11,
        title: 'zzzz'
      }
    ]
*/


export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY_ADD':
      return [...state, payload];

    case 'CATEGORY_UPDATE':
      return state.map(item => (item.id === payload.id ? payload : item));

    case 'CATEGORY_DELETE':
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};
