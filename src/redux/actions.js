export const ADD_USER = 'ADD_USER'
export const ADD_SEARCH = 'ADD_SEARCH'
export const ADD_GAMES = 'ADD_GAMES'

export function addUser(user){
    return { type: ADD_USER, user};
}

export function addGames(games){
    return { type: ADD_GAMES, games};
}

export function addSearch(search){
    return { type: ADD_SEARCH, search}
}