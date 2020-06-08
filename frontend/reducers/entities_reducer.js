import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import walksReducer from './walks_reducer';

export default combineReducers({
    users: usersReducer,
    walks: walksReducer,
})