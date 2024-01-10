// now let's test Notifications with enzyme
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        // at least, I hope so
        shallow(<Notifications />);
    });

    it('renders 3 NotificationItem elements', () => {
        // first make a new wrapper
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem').length).toBe(3);
    });

    it('properly renders the expected text', () => {
        // first make a new wrapper
        const wrapper = shallow(<Notifications />);
        // should say "Here is the list of notifications"
        expect(wrapper.contains("Here is the list of notifications")).toBe(true);
    });

    it('has the correct HTML in the first NotificationItem element', () => {
        // first make a new wrapper
        const wrapper = shallow(<Notifications />);
        // grab that first one
        const firstNotificationItemElement = wrapper.find(NotificationItem).first();
        // and check its html
        expect(firstNotificationItemElement.contains('<li data-notification-type="default">New course available</li>'));
    });
});
