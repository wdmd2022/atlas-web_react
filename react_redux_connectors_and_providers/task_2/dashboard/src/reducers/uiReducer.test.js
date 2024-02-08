import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  // first let's set an initial state
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
  });

  it('returns a value equal to the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('correctly sets isNotificationDrawer visible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    // first we define our action
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    // now let's define our expected state
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('correctly sets isNotificationDrawer visible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
    // first we define our action
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    // now let's define our expected state
    const expectedState = initialState.set('isNotificationDrawerVisible', false);
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('correctly sets isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    // first we define our action
    const action = { type: LOGIN_SUCCESS };
    const expectedState = initialState.set('isUserLoggedIn', true)
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('correctly sets isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
    // first we define our action
    const action = { type: LOGIN_FAILURE };
    // now let's define our expected state
    const expectedState = initialState.set('isUserLoggedIn', false)
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('correctly sets isUserLoggedIn to false when LOGOUT is passed', () => {
    // first we define our action
    const action = { type: LOGOUT };
    // now let's define our expected state
    const expectedState = initialState.set('isUserLoggedIn', false).set('user', Map({}));
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });
});
