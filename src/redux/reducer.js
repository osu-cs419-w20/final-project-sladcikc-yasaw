import { combineReducers } from 'redux';

import {
    ADD_USER,
    ADD_SEARCH,
} from './actions';

function userReducer(state = {}, action){
    switch(action.type) {
        case ADD_USER:
            return({
                user: action.user
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