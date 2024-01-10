// now let's test Notifications with enzyme
import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        // at least, I hope so
        shallow(<Notifications />);
    });

    it('renders three list items', () => {
        // first make a new wrapper
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('properly renders the expected text', () => {
        // first make a new wrapper
        const wrapper = shallow(<Notifications />);
        // should say "Here is the list of notifications"
        expect(wrapper.contains("Here is the list of notifications")).toBe(true);
    })
});
