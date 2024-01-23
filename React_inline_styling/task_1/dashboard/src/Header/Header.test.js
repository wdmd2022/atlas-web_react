import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from "aphrodite";

// can't have Aphrodite messing up our tests with style injection
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// but when we're done we'll want to clear up that suppression
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Header />', () => {
    it('renders without crashing hopefully', () => {
        // this will crash it if I'm wrong!
        shallow(<Header />);
    });

    it('renders an img and h1 tag', () => {
        // first we'll make a new shallow Header
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img').length).toBe(1);
        expect(wrapper.find('h1').length).toBe(1);
    });
});
