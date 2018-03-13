import { 
    UPDATE_FORM, updateForm,
    INIT_SETUP, initSetup,
    NEXT_STEP, nextStep,
    PREV_STEP, prevStep
} from 'redux/modules/setup'

describe('creates redux actions', () => {

    it('create UPDATE_FORM', () => {
        const expectedAction = { type: UPDATE_FORM };
        expect(updateForm()).toEqual(expectedAction);
    });

    it('create INIT_STEP', () => {
        const expectedAction = { type: INIT_SETUP };
        expect(initSetup()).toEqual(expectedAction);
    });

    it('create NEXT_STEP', () => {
        const expectedAction = { type: NEXT_STEP };
        expect(nextStep()).toEqual(expectedAction);
    });

    it('create PREV_STEP', () => {
        const expectedAction = { type: PREV_STEP };
        expect(prevStep()).toEqual(expectedAction);
    });

});