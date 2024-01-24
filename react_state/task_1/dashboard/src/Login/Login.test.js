import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from "aphrodite";

// can't have Aphrodite messing up our tests with style injection
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// but when we're done we'll want to clear up that suppression
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Login />', () => {
    it('renders without crashing hopefully', () => {
        // this will crash it if I'm wrong!
        shallow(<Login />);
    });

    it('renders 3 input tags and 2 label tags', () => {
        // first we'll make a new shallow Login
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(3);
        expect(wrapper.find('label').length).toBe(2);
    });
});
