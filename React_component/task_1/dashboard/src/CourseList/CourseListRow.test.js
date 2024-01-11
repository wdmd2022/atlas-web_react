import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('CourseListRow', () => {
  it('if isHeader is true, renders one cell with colspan=2 if textSecondCell does not exist', () => {
    // first we make a shallow wrapper
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Cool' />);
    const myTh = wrapper.find('th');
    expect(myTh.prop('colSpan')).toBe("2");
    expect(myTh.length).toBe(1);
  });

  it('if isHeader is true, and textSecondCell is present, renders two cells', () => {
    // let's make another wrapper
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Cool' textSecondCell='Beans' />);
    const myThs = wrapper.find('th');
    expect(myThs.length).toBe(2);
  });

  if('if isHeader is false, renders correctly two td elements within a tr', () => {
    // let's make a wrapper again
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='Nice' textSecondCell='Code' />);
    const myTds = wrapper.find('td');
    expect(myTds.length).toBe(2);
  });
});
