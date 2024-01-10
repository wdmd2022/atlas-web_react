import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
    it('renders without crashing hopefully', () => {
        // this will crash it if I'm wrong!
        shallow(<Login />);
    });

    it('renders 2 input tags and 2 label tags', () => {
        // first we'll make a new shallow Login
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
    });
});
