import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from '../App/AppContext';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

// can't have Aphrodite messing up our tests with style injection
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// but when we're done we'll want to clear up that suppression
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Header />', () => {
    // since Header relies on context, we'll prepare a fake one so that
    // we can do some rendering
    const fakeContext = {
      user: {
        email: 'llcooldoug@example.com',
        password: 'swordfish',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const defaultContext = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    }

    it('renders without crashing hopefully', () => {
        // this will crash it if I'm wrong!
        mount(
          <AppContext.Provider value={fakeContext}>
            <Header />
          </AppContext.Provider>
        );
    });

    it('renders an img and h1 tag', () => {
        // first we'll make a new wrapper
        const wrapper = mount(
          <AppContext.Provider value={fakeContext}>
            <Header />
          </AppContext.Provider>
        );
        // then look for an image
        expect(wrapper.find('img').length).toBe(1);
        // and then an h1
        expect(wrapper.find('h1').length).toBe(1);
    });

    it('does not show logoutSection with the default context', () => {
      const wrapper = mount(
          <AppContext.Provider value={defaultContext}>
              <Header />
          </AppContext.Provider>
      );
      expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('does show logoutSection with a logged-in context', () => {
      const wrapper = mount(
          <AppContext.Provider value={fakeContext}>
              <Header />
          </AppContext.Provider>
      );
      expect(wrapper.find('#logoutSection').length).toBe(1);
  });

  it('correctly calls logOut when the link is clicked when logged in', () => {
      // first we make a spy
      const logOutSpy = jest.fn();
      // and a new context in which to employ the spy
      const loggedInWithSpy = {
        user: {
          email: 'love2email@example.com',
          password: 'swordfish',
          isLoggedIn: true,
        },
        logOut: logOutSpy,
      }
      // then get wrapping
      const wrapper = mount(
          <AppContext.Provider value={loggedInWithSpy}>
              <Header />
          </AppContext.Provider>
      );
      wrapper.find('a').simulate('click');
      expect(logOutSpy).toHaveBeenCalled();
  });
});
