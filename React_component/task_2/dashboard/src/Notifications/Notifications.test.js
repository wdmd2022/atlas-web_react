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

    // it('renders 3 NotificationItem elements', () => {
    //     // first make a new wrapper
    //     const wrapper = shallow(<Notifications displayDrawer={true} />);
    //     expect(wrapper.find('NotificationItem').length).toBe(3);
    // });

    // it('properly renders the expected text', () => {
    //     // first make a new wrapper
    //     const wrapper = shallow(<Notifications displayDrawer={true} />);
    //     // should say "Here is the list of notifications"
    //     expect(wrapper.contains("Here is the list of notifications")).toBe(true);
    // });

    // it('has the correct HTML in the first NotificationItem element', () => {
    //     // first make a new wrapper
    //     const wrapper = shallow(<Notifications displayDrawer={true} />);
    //     // grab that first one
    //     const firstNotificationItemElement = wrapper.find(NotificationItem).first();
    //     // and check its html
    //     expect(firstNotificationItemElement.contains('<li data-notification-type="default">New course available</li>'));
    // });

    it('displays the menu item when displayDrawer is false', () => {
        // make a new wrapper
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('does not display div.Notifications when displayDrawer is false', () => {
        // another wrapper
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications').length).toBe(0);
    });

    // it('also displays the menu item when displayDrawer is true', () => {
    //     // another wrapper
    //     const wrapper = shallow(<Notifications displayDrawer={true} />);
    //     expect(wrapper.find('.menuItem').length).toBe(1);
    // })

    // it('does display div.Notifications when the displayDrawer is true', () => {
    //     // you know the drill by this point
    //     const wrapper = shallow(<Notifications displayDrawer={true} />);
    //     expect(wrapper.find('.Notifications').length).toBe(1);
    // })

    // it('can handle an empty array', () => {
    //     // wrapper time
    //     const wrapper = shallow(<Notifications listNotifications={[]} />);
    //     expect(wrapper.text()).toContain('No new notification for now');
    // });

    // it('can handle no array being passed', () => {
    //     // wrapper time
    //     const wrapper = shallow(<Notifications />);
    //     expect(wrapper.text()).toContain('No new notification for now');
    // });

    // it('can handle an array being passed in', () => {
    //     // let's make a dummy array
    //     const listNotifications = [
    //       { id: 1, type: 'urgent', value: 'WOW you better do this task' },
    //       { id: 2, type: 'urgent', value: 'URGENTLY eat hamburgers' },
    //     ];
    //     // and give it to a dummy wrapper
    //     const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    //     expect(wrapper.find(NotificationItem).length).toBe(2);
    // });

    it('does not say the incorrect thing when the array is empty', () => {
        // because that would be embarrasing
        const wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
    });
});
