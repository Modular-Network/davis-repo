import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender'
import * as api from 'lib/api';
import _ from 'underscore'

import storeUsersFile from 'lib/blosym-modules/utils/storeUsersFile';
import getUsersFile from 'lib/blosym-modules/utils/getUsersFile'

export const REGISTER_USER = 'user/REGISTER_USER'
export const UPDATE_USER = 'user/UPDATE_USER'
export const VALIDATE_USER_PHONE = 'user/VALIDATE_USER_PHONE'

export const registerUser = createAction(REGISTER_USER, api.regUser);
export const updateUser = createAction(UPDATE_USER);
export const validateUserPhone = createAction(VALIDATE_USER_PHONE);

const userData = getUsersFile();
const initialState = { isAuthenticated: _.isEmpty(userData) ? false : true, ...userData }

export default handleActions({
    ...pender({
        type: REGISTER_USER,
        onSuccess: (state, action) => {

            const saveUser = { ...state, isAuthenticated: true, ...action.payload.data }

            storeUsersFile(saveUser);

            return saveUser
        }
    }),
    [UPDATE_USER]: (state, action) => ({
        ...state,
        user: { ...action.payload }
    }),
    [VALIDATE_USER_PHONE]: (state, action) => ({
        ...state,
        isAuthenticated: { isAuthenticated: true }
    })
}, initialState);