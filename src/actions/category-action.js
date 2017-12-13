

export const category_create = category => {

    return {
        type: 'CATEGORY_CREATE',
        category
    }
}

export const category_update = category => {
    return {
        type: 'CATEGORY_UPDATE',
        category
    }
}

export const category_delete = category => {
    return {
        type: 'CATEGORY_DESTROY',
        id: category.id
    }
}