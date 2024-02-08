// test file for App component using shallow rendering
import React from 'react';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { shallow, mount } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import jsdom from 'jsdom';
import { StyleSheetTestUtils } from 'aphrodite';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import { MapStateToProps } from './App';

const { JSDOM } = jsdom;
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;
global.alert = jest.fn();

// const mockStore = configureMockStore();
// const initialState = fromJS({
//   isUserLoggedIn: true,
// });
// const store = mockStore(initialState);

// can't have Aphrodite messing up our tests with style injection
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// but when we're done we'll want to clear up that suppression
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// new test suite with redux store
describe('redux store passes state to props properly', () => {
  it('returns what we hope for when passed state', () => {
    const mockState = fromJS({
      isUserLoggedIn: true
    });
    const coolProps = mapStateToProps(mockState);
    expect(coolProps).toEqual({
      isLoggedIn: true,
    })
  })
})

// describe('<App />', () => {
//   it('renders without crashing', () => {
//     // this will crash if I'm wrong
//     shallow(<App />);
//   });

//   it('should contain the Notifications component', () => {
//     // first let's make a nice new shallow copy of App
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Notifications).length).toBe(1);
//   });

//   it('should contain the Header component', () => {
//     // first let's make a nice new shallow copy of App
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Header).length).toBe(1);
//   });

//   it('should contain the Login component', () => {
//     // first let's make a nice new shallow copy of App
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Login).length).toBe(1);
//   });

//   it('should contain the Footer component', () => {
//     // first let's make a nice new shallow copy of App
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(Footer).length).toBe(1);
//   });

//   it('should not display CourseList by default', () => {
//     // so let's make a new shallow copy and check
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(CourseList).length).toBe(0);
//   });

//   it('should display only the correct stuff when isLoggedIn is true', () => {
//     // let's make a shallow copy and do two checks
//     const wrapper = shallow(<App />);
//     // and let's set the state in the wrapper
//     wrapper.setState({ user: { isLoggedIn: true } });
//     // first let's confirm it does not show the Login component
//     expect(wrapper.find(Login).length).toBe(0);
//     // then let's confirm it includes the CourseList component
//     expect(wrapper.find(CourseList).length).toBe(1);
//   });

//   it('calls logOut and alert when we press Ctrl+H', () => {
//     // first we get to go back to wrapping, our favorite pastime
//     const wrapper = mount(<App />);
//     // next, like the man who adopted James Bond, we set about to make a spy:
//     const logOutSpy = jest.spyOn(wrapper.instance(), 'logOut');
//     // finally we approximate the Platonic idea of a ctrl-h keypress
//     // but first we'll wrap it in act so that all updates related to state changes
//     // are processed before the assertions happen.
//     act(() => {
//       const event = new window.KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
//       document.dispatchEvent(event);
//     });
//     // then we check to see if it called what we want
//     expect(logOutSpy).toHaveBeenCalled();
//     // expect(alertMock).toHaveBeenCalledWith('Logging you out');
//     expect(global.alert).toHaveBeenCalledWith('logging you out');
//     // and reset it so nobody knows we were mocking
//     logOutSpy.mockRestore();
//   });

//   it('has a default state for displayDrawer correctly set to false', () => {
//     // so much wrapping it is beginning to really feel like Christmas Eve
//     const wrapper = shallow(<App />);
//     // let's check that state
//     expect(wrapper.state('displayDrawer')).toBe(false);
//   });

//   it('updates the state of displayDrawer to true when we call handleDisplayDrawer', () => {
//     // let's wrap up this gift of a test
//     const wrapper = shallow(<App />);
//     // and call our function
//     wrapper.instance().handleDisplayDrawer();
//     // and make it clear that we have high hopes for it to work
//     expect(wrapper.state('displayDrawer')).toBe(true);
//   });

//   it('updates the state of displayDrawer to false if we call handleHideDrawer', () => {
//     // I'm pretty sure you understand what this next step is by this point
//     const wrapper = shallow(<App />);
//     // since it defaults to False let's set it to true using our newly-proved method
//     wrapper.instance().handleDisplayDrawer();
//     // now we can say 'oh whoops we changed our mind, hide it plz'
//     wrapper.instance().handleHideDrawer();
//     // and assert what we expect to be true (I swear that's not rude)
//     expect(wrapper.state('displayDrawer')).toBe(false);
//   });

//   it('actually updates the state when logging in', () => {
//     // Don't cut your fingers, it's time to get wrapping again
//     const wrapper = shallow(<App />);
//     // let's define some fake credentials
//     const emaily = "president@example.com";
//     const passy = "ilovepasswords";
//     // now let's use them to call the logIn function on our test instance
//     wrapper.instance().logIn(emaily, passy);
//     // and let us now cautiously peek inside the wrapped package to confirm
//     expect(wrapper.state('user')).toEqual({
//       email: emaily,
//       password: passy,
//       isLoggedIn: true
//     });
//   });

//   it('actually updates the state when logging out', () => {
//     // Don't cut your fingers, it's time to get wrapping again
//     const wrapper = shallow(<App />);
//     // let's define some fake credentials
//     const emaily = "president@example.com";
//     const passy = "ilovepasswords";
//     // now let's use them to call the logIn function on our test instance
//     wrapper.instance().logIn(emaily, passy);
//     // and let us now cautiously peek inside the wrapped package to confirm
//     expect(wrapper.state('user')).toEqual({
//       email: emaily,
//       password: passy,
//       isLoggedIn: true,
//     });
//     // great, that worked, so let's log out and check again
//     wrapper.instance().logOut();
//     // and confirm that it's all gone
//     expect(wrapper.state('user')).toEqual({
//       email: '',
//       password: '',
//       isLoggedIn: false,
//     })
//   });

//   it('correctly removes notifications using markNotificationAsRead', () => {
//     // let's make a mockery out of this data
//     const mockListNotifications = [
//       { id: 1, value: "Please don't read me" },
//       { id: 2, value: "Please don't read me either" },
//       { id: 3, value: "Go ahead punk, make my day" },
//     ];
//     // and wrap up a shallow copy of our app
//     const wrapper = shallow(<App />);
//     // we'll add our fake list to the state
//     wrapper.setState({ listNotifications: mockListNotifications });
//     // and call our function on the last one
//     wrapper.instance().markNotificationAsRead(3);
//     // then grab a copy of that updated state
//     const smallerMockListNotifications = wrapper.state('listNotifications');
//     // and act like we knew 3 would be removed all along
//     expect(smallerMockListNotifications).toEqual(expect.not.arrayContaining([{ id: 3 }])); // that is a lot of closing brackets
//   })

// });
