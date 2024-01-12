// test file for App component using shallow rendering
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';

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
});
