import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender'

import user from './user';

const modules = combineReducers({
    user: user,
    pender: penderReducer
});

export default modules;