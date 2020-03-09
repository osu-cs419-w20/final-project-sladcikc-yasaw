export const ADD_USER = 'ADD_USER'
export const ADD_SEARCH = 'ADD_SEARCH'

export function addUser(user){
    return { type: ADD_USER, user};
}

export function addSearch(search){
    return { type: ADD_SEARCH, search}
}