import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import React from 'react';
import { shallow } from 'enzyme';

describe('<CourseList />', () => {
  it('Totally does not crash when it renders', () => {
    // we can prove it by making a shallow render and hoping for the best
    shallow(<CourseList />);
    // nice
  });

  it('Renders the 3 different rows we were hoping for', () => {
    // first let's make a new wrapper (what is this, a wrapper convention?)
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(3);
  });
});
