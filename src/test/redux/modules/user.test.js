import {
    REGISTER_USER, registerUser,
    AUTHENTICATE, authenticate,
    SIGNOUT, signout,
    INIT_SETUP, initSetup
} from 'redux/modules/user'

import thunk from 'redux-thunk'
import moxios from 'moxios'

describe('creates redux actions', () => {

    beforeEach(function () {
        moxios.install()
    });

    afterEach(function () {
        moxios.uninstall()
    });

    it('create REGISTER_USER', () => {
        expect(registerUser({user: 'ben@jam.in',password:'issocool'})).toEqual(expect.objectContaining({type: REGISTER_USER}))
    })

    it('create AUTHENTICATE', () => {
        const expectedAction = { type: AUTHENTICATE };
        expect(authenticate()).toEqual(expectedAction);
    });

    it('create SIGNOUT', () => {
        const expectedAction = { type: SIGNOUT };
        expect(signout()).toEqual(expectedAction);
    });

    it('create INIT_STEP', () => {
        const expectedAction = { type: INIT_SETUP };
        expect(initSetup()).toEqual(expectedAction);
    });

});
