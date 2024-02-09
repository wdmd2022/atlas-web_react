import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import notificationReducer from './notificationReducer';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
  // first we'll set up a default state
  const initialState = fromJS({
    notifications: {},
    filter: 'DEFAULT',
  });

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
    const normalizedData = notificationsNormalizer(testAction.data);
    const notificationsWithReadStatus = Object.keys(normalizedData.entities.notifications).reduce((acc, notificationId) => {
      const notification = normalizedData.entities.notifications[notificationId];
      acc[notificationId] = { ...notification, isRead: false };
      return acc;
    }, {});
    const expectedState = initialState.merge({ notifications: fromJS(notificationsWithReadStatus) });
    expect(notificationReducer(undefined, testAction).toJS()).toEqual(expectedState.toJS());
  });

  it('sets isRead to true when MARK_AS_READ is passed with a specific index', () => {
    const testState = fromJS({
      // let's make a fake state object with some notifications in it
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: "default", value: "New course available" },
        2: { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      },
    });
    const testAction = { type: MARK_AS_READ, index: 2 };
    const expectedState = testState.setIn(['notifications', String(testAction.index), 'isRead'], true);
    expect(notificationReducer(testState, testAction).toJS()).toEqual(expectedState.toJS());
  });

  it('sets the correct filter value when SET_TYPE_FILTER is passed', () => {
    const testAction = { type: SET_TYPE_FILTER, filter: "URGENT" };
    const expectedState = initialState.set('filter', testAction.filter);
    expect(notificationReducer(initialState, testAction).toJS()).toEqual(expectedState.toJS());
  });
});
