import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import notificationReducer from './notificationReducer';

describe('notificationReducer', () => {
  // first we'll set up a default state
  const initialState = {
    notifications: [],
    filter: 'DEFAULT',
  };

  it('returns the default state when nothing is passed', () => {
    // this shouldn't change anything
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('returns a bunch of notifications and sets isRead to false on each of them when FETCH_NOTIFICATIONS_SUCCESS is passed', () => {
    const testAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ],
    };
    // we expect it to take the initial state, add the notifs from the data, and update the isRead attribute on each
    const expectedState = { ...initialState, notifications: testAction.data.map(notification => ({ ...notification, isRead: false })) };
    expect(notificationReducer(undefined, testAction)).toEqual(expectedState);
  });

  it('sets isRead to true when MARK_AS_READ is passed with a specific index', () => {
    const testState = {
      // let's make a fake state object with some notifications in it
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      ],
    };
    const testAction = { type: MARK_AS_READ, index: 2 };
    // should only mark the matching index notificaiton as read
    const expectedState = { ...testState, notifications: testState.notifications.map(notification => notification.id === testAction.index ? { ...notification, isRead: true } : notification) };
    expect(notificationReducer(testState, testAction)).toEqual(expectedState);
  });

  it('sets the correct filter value when SET_TYPE_FILTER is passed', () => {
    const testAction = { type: SET_TYPE_FILTER, filter: "URGENT" };
    const expectedState = { ...initialState, filter: testAction.filter };
    expect(notificationReducer(undefined, testAction)).toEqual(expectedState);
  });
});
