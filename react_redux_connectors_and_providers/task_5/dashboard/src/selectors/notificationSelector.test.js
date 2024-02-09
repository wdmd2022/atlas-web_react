import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { fromJS } from 'immutable';

describe('notificationSelector', () => {
  // let's make a totally fake but totally useful initial state
  const initialState = fromJS({
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, isRead: true, type: "default", value: "New course available" },
      2: { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      3: { id: 3, isRead: false, type: "urgent", value: "New data available" },
    },
  });

  it('returns the filter type we want using filterTypeSelected', () => {
    expect(filterTypeSelected(initialState)).toEqual('DEFAULT');
  });

  it('returns all notifs when we use getNotifications', () => {
    expect(getNotifications(initialState).toJS()).toEqual(initialState.get('notifications').toJS());
  });

  it('returns unread notifications -- get this -- when we use getUnreadNotifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.size).toEqual(2);
    expect(unreadNotifications.every(notif => !notif.get('isRead'))).toBe(true);
  });
});
