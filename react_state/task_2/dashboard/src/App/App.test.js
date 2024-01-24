// test file for App component using shallow rendering
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { shallow, mount } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import jsdom from 'jsdom';
import { StyleSheetTestUtils } from 'aphrodite';

const { JSDOM } = jsdom;
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;
global.alert = jest.fn();

// can't have Aphrodite messing up our tests with style injection
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// but when we're done we'll want to clear up that suppression
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<App />', () => {
  it('renders without crashing', () => {
    // this will crash if I'm wrong
    shallow(<App />);
  });

  it('should contain the Notifications component', () => {
    // first let's make a nice new shallow copy of App
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('should contain the Header component', () => {
    // first let's make a nice new shallow copy of App
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should contain the Login component', () => {
    // first let's make a nice new shallow copy of App
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('should contain the Footer component', () => {
    // first let's make a nice new shallow copy of App
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('should not display CourseList by default', () => {
    // so let's make a new shallow copy and check
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('should display only the correct stuff when isLoggedIn is true', () => {
    // let's make a shallow copy and do two checks
    const wrapper = shallow(<App isLoggedIn={true} />);
    // first let's confirm it does not show the Login component
    expect(wrapper.find(Login).length).toBe(0);
    // then let's confirm it includes the CourseList component
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it('calls logOut and alert when we press Ctrl+H', () => {
    // first we will mock up the function we want to look for
    const logOutMock = jest.fn();
    // secondly we will mock up the alert function!
    // const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    // now we get to go back to wrapping!
    const wrapper = mount(<App logOut={logOutMock} />);
    // finally we approximate the Platonic idea of a ctrl-h keypress
    const event = new window.KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);
    // then we check to see if it called what we want
    expect(logOutMock).toHaveBeenCalled();
    // expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(global.alert).toHaveBeenCalledWith('logging you out');
    // and reset it so nobody knows we were mocking
    // alertMock.mockRestore();
  });

  it('has a default state for displayDrawer correctly set to false', () => {
    // so much wrapping it is beginning to really feel like Christmas Eve
    const wrapper = shallow(<App />);
    // let's check that state
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('updates the state of displayDrawer to true when we call handleDisplayDrawer', () => {
    // let's wrap up this gift of a test
    const wrapper = shallow(<App />);
    // and call our function
    wrapper.instance().handleDisplayDrawer();
    // and make it clear that we have high hopes for it to work
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('updates the state of displayDrawer to false if we call handleHideDrawer', () => {
    // I'm pretty sure you understand what this next step is by this point
    const wrapper = shallow(<App />);
    // since it defaults to False let's set it to true using our newly-proved method
    wrapper.instance().handleDisplayDrawer();
    // now we can say 'oh whoops we changed our mind, hide it plz'
    wrapper.instance().handleHideDrawer();
    // and assert what we expect to be true (I swear that's not rude)
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});
