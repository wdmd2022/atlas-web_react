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

    it('has a submit button that by default is disabled', () => {
      // make a wrapper
      const wrapper = shallow(<Login />);
      // find the submit button-like input
      const submitButton = wrapper.find('input[type="submit"]');
      // announce that we expect it to be disabled
      expect(submitButton.props().disabled).toBe(true);
    });

    it('enables the submit button when both other inputs are non-empty', () => {
      // wrapping time
      const wrapper = shallow(<Login />);
      // simulate changing the inputs from the default which is blank
      wrapper.find('input[type="email"]').simulate('change', { target: { value: 'coolemail@whatever.com' } });
      wrapper.find('input[type="password"]').simulate('change', { target: { value: 'swordfish' } });
      // look for the submit input button-like thing
      const submitButton = wrapper.find('input[type="submit"]');
      // announce we expect it to not be disabled
      expect(submitButton.props().disabled).toBe(false);
    });
});
