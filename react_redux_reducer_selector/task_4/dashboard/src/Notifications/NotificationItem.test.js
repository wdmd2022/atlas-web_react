import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

// can't have Aphrodite messing up our tests with style injection
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// but when we're done we'll want to clear up that suppression
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
  it('hopefully renders without crashing', () => {
    // let's make a shallow wrapper to test
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct html given dummy type and value props', () => {
    // let's make a new shallow wrapper
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.text()).toBe("test");
    expect(wrapper.prop('data-notification-type')).toBe('default');
  });

  it('correctly renders dummy html we pass it', () => {
    // and another new shallow wrapper (I like them fresh like a new shirt)
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    // then use enzyme's 'find' method to find the li element
    const listItem = wrapper.find('li');
    expect(listItem.length).toBe(1);
    expect(listItem.prop('data-notification-type')).toBe('default');
    expect(listItem.html()).toContain('<u>test</u>');
  });

  it('if passed a spy as markAsRead property, it calls the spy with the right argument when clicked', () => {
    const spyForMarkAsRead = jest.fn();
    // time to get wrapping!
    const wrapper = shallow(<NotificationItem id={1337} markAsRead={spyForMarkAsRead} />);
    // pretend to click it
    wrapper.simulate('click');
    // and confirm what happened
    expect(spyForMarkAsRead).toHaveBeenCalledWith(1337)
  });
});
