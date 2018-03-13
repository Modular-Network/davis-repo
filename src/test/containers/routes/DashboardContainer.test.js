import React from 'react';
import { shallow } from 'enzyme';
import { DashboardContainer } from 'containers/routes/DashboardContainer';

describe('DashboardContainer', () => {

        let dashboard = shallow(<DashboardContainer />);
    
        it('renders properly', () => {
            expect(dashboard).toMatchSnapshot();
        });

});
