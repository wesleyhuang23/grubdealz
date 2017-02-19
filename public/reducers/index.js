import {combineReducers} from 'redux';
import UserReducer from './reducer-users.js';

const allReducers = combineReducers({
    users: UserReducer
})

export default allReducers;