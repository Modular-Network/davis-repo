import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from 'components/Navigation';

describe('Navigation', () => {

    describe('when user is logged in', () => {

        let navi = shallow(<Navigation auth={true} />);
    
        //console.log(navi.debug());
    
        it('renders properly', () => {
            expect(navi).toMatchSnapshot();
        });
    
        it('contains a connected Appbar component', () => {
            expect(navi.find('Appbar').children('Logged'));
        });
    });

    describe('when user is not logged in', () => {
        
        let navi = shallow(<Navigation auth={false} />);
    
        //console.log(navi.debug());
    
        it('renders properly', () => {
            expect(navi).toMatchSnapshot();
        });
    
        it('contains a connected Appbar component', () => {
            expect(navi.find('Appbar').children('Login'));
        });
    });

});