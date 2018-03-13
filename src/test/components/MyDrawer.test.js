import React from 'react';
import { shallow } from 'enzyme';
import MyDrawer from 'components/MyDrawer';

describe('MyDrawer', () => {
    const drawer = shallow(<MyDrawer />);

    //console.log(drawer.debug()); 

    it('renders properly', () => {
        expect(drawer).toMatchSnapshot();
    });

    it('initializes the drawer `state`', () => {
        expect(drawer.state()).toEqual({ open: true });
    });

    it('contains the main drawer container', () => {
        expect(drawer.find('.drawer-container').exists()).toBe(true);
    });

    it('contains the mui Drawer component', () => {
        expect(drawer.find('.drawer-container').children('Drawer').length).toEqual(1);                
    });

    it('contains logo in Drawer component', () =>{
        expect(drawer.find('.logo').exists()).toBe(true);
    });

    it('contains route links in Drawer component', () =>{
        expect(drawer.find('Drawer').children('Link').length).toEqual(3);
    });

});