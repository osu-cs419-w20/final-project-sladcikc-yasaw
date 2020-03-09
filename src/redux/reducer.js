import { combineReducers } from 'redux';

import {
    ADD_USER,
} from './actions';

function userReducer(state = [], action){
    switch(action.type) {
        case ADD_USER:
            return({
                user: action.user
            });
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    user: userReducer,
});
export default rootReducer;