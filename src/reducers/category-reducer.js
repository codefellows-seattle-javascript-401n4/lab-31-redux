  const categoryReducer = (state = [], action) => {

    switch(action.type) {
        case 'CATEGORY_CREATE':
        return [...state, action.category];

        case 'CATEGORY_UPDATE':
        
        return state.map(category => {
           if (category.id === action.category.id) category.name = action.category.update;
           return category;
        });
        
        case 'CATEGORY_DESTROY':
        return state.filter((category) => {
          if (category.id !== action.id) return category;
        });

        default:
            return state;
    }
  }

  export default categoryReducer;