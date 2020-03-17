import { combineReducers } from 'redux';

import {
    ADD_USER,
    ADD_SEARCH,
    ADD_GAMES
} from './actions';

function userReducer(state = {}, action){
    switch(action.type) {
        case ADD_USER:
            return({
                user: action.user
            });
        case ADD_GAMES:
            return({
                games: action.games
            });
        case ADD_SEARCH:
            return({
                search: action.search
            }
            );
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    userReducer,
});
export default rootReducer;