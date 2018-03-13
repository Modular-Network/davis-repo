import React from 'react';
import { shallow } from 'enzyme';
import Root from 'containers/Root';

describe('Root', () => {
    const root = shallow(<Root />);

    //console.log(root.debug()); 

    it('renders properly', () => {
        expect(root).toMatchSnapshot();
    });

    it('contains a connected MuiThemeProvider component', () => {
        expect(root.find('MuiThemeProvider').exists()).toBe(true);
    });

    it('contains a connected redux Provider component', () => {
        expect(root.find('Provider').exists()).toBe(true);
    });
    
    it('contains a connected BrowserRouter component', () => {
        expect(root.find('BrowserRouter').exists()).toBe(true);
    });
    
    it('contains a connected App component', () => {
        expect(root.find('withRouter(Connect(App))').exists()).toBe(true);
    });

});
