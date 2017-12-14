import newCategory from '../lib/newCategory';

export const category_create = category => {
    return {
        type: 'CATEGORY_CREATE',
        category: newCategory(category.categoryName, category.categoryBudget)
    }
}

export const category_update = category => {
    return {
        type: 'CATEGORY_UPDATE',
        category: category
    }
}

export const category_delete = id => {
    return {
        type: 'CATEGORY_DESTROY',
        id
    }
}