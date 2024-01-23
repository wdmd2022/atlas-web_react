import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

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
    expect(wrapper.html()).toContain('<li data-notification-type="default"><u>test</u></li>');
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
