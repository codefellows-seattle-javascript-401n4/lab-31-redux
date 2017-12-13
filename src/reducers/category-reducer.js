  const categoryReducer = (state = [], action) => {
    switch(action.type) {
        case 'CATEGORY_CREATE':
        return [...state, action.category];

        case 'CATEGORY_UPDATE':
        return [];
        
        case 'CATEGORY_DESTROY':
        return [];

        default:
            return state;
    }
  }

  export default categoryReducer;