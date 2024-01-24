// now let's test Notifications with enzyme
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow, mount } from 'enzyme';
import jsdom from 'jsdom';
import { StyleSheetTestUtils } from 'aphrodite';

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

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        // at least, I hope so
        shallow(<Notifications />);
    });

    it('renders 3 NotificationItem elements', () => {
        // first set some content for pass into NotificationItems
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
        ];
        // now we can make a new wrapper
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find('NotificationItem').length).toBe(3);
    });

    it('properly renders the expected text', () => {
        // first make a new wrapper
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        // should say "Here is the list of notifications"
        expect(wrapper.contains("Here is the list of notifications")).toBe(true);
    });

    it('has the correct HTML in the first NotificationItem element', () => {
        // first make a new wrapper
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        // grab that first one
        const firstNotificationItemElement = wrapper.find(NotificationItem).first();
        // and check its html
        expect(firstNotificationItemElement.contains('<li data-notification-type="default">New course available</li>'));
    });

    it('displays the menu item when displayDrawer is false', () => {
        // make a new wrapper
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menu').length).toBe(1);
    });

    it('does not display div.Notifications when displayDrawer is false', () => {
        // another wrapper
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications').length).toBe(0);
    });

    it('also displays the menu item when displayDrawer is true', () => {
        // another wrapper
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menu').length).toBe(1);
    })

    it('does display div.Notifications when the displayDrawer is true', () => {
        // you know the drill by this point
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications').length).toBe(1);
    })

    it('can handle an empty array', () => {
        // wrapper time
        const wrapper = mount(<Notifications listNotifications={[]} displayDrawer={true} />);
        expect(wrapper.text()).toContain('No new notification for now');
    });

    it('can handle no array being passed', () => {
        // wrapper time
        const wrapper = mount(<Notifications displayDrawer={true} />);
        expect(wrapper.text()).toContain('No new notification for now');
    });

    it('can handle an array being passed in', () => {
        // let's make a dummy array
        const listNotifications = [
          { id: 1, type: 'urgent', value: 'WOW you better do this task' },
          { id: 2, type: 'urgent', value: 'URGENTLY eat hamburgers' },
        ];
        // and give it to a dummy wrapper
        const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).length).toBe(2);
    });

    it('does not say the incorrect thing when the array is empty', () => {
        // because that would be embarrasing
        const wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
    });

    it('calls markAsRead with the right content for console.log', () => {
        // first set some content for pass into NotificationItems
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
        ];
        // now set up the spy (exciting!)
        const consoleSpy = jest.spyOn(console, 'log');
        // now we can make a new wrapper
        const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        // make an instance right this instance plz
        const instance = wrapper.instance();
        instance.markAsRead(2);
        expect(consoleSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');
        // clean it up, nothing to see here
        consoleSpy.mockRestore();
    });

    it('does not rerender when the list is the same', () => {
        // Let's make a list and see if it sticks around or not
        const listNotifications = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' }
        ];
        // I am almost out of scotch tape but yet, I continue to wrap
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        // we will spy on shouldComponentUpdate
        const shouldUpdateSpy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
        // now we'll set props to the same thing to see if it triggers a re-render
        wrapper.setProps({ listNotifications: [...listNotifications] });
        // we confirm that it was called:
        expect(shouldUpdateSpy).toHaveBeenCalled();
        // and hopefully that it returned false:
        expect(shouldUpdateSpy).toHaveLastReturnedWith(false);
        // and let's clean up our mess
        shouldUpdateSpy.mockRestore();
      });

      it('rerenders when the list gets longer', () => {
        // First let's prepare our lists for growth! Maybe we'll mark their heights on the wall...
        const initialListNotifications = [
          { id: 1, type: 'default', value: 'New course available' }
        ];
        const moreImpressiveListNotifications = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' }
        ];
        // and get a-wrappin'
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={initialListNotifications} />);
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: moreImpressiveListNotifications });
        // And let's check our expectations:
        expect(shouldUpdate).toBe(true);
      });

      it('calls handleDisplayDrawer when the menu item is clicked', () => {
        // I'm not normally one for mockery but here we go
        const handleDisplayDrawerMock = jest.fn();
        // I usually wrap presents in several layers but let's try a shallow one
        const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawerMock} />);
        // let's click the menu
        wrapper.find('.menu').simulate('click');
        // and declare our expectations
        expect(handleDisplayDrawerMock).toHaveBeenCalled();
      });

      it('calls handleHideDrawer when the close button is clicked', () => {
        // Mock, yeah, ing, yeah, bird, yeah, yeah, yeah
        const handleHideDrawerMock = jest.fn();
        // yet again we wrap Notifications, please don't tell anyone I'm a re-gifter
        const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawerMock} />);
        // and let's click a button
        wrapper.find('button').simulate('click');
        // and expectantly wait
        expect(handleHideDrawerMock).toHaveBeenCalled();
      });
});
