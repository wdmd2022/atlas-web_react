import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('all the different UI Action Creators', () => {
  it('has login, which creates the expected action', () => {
    // first let's make an action with the email and pass
    const action = login('dougie@example.com', 'pa$$word');
    expect(action).toEqual({
      type: LOGIN,
      user: { email: 'dougie@example.com', password: 'pa$$word' }
    });
  });

  it('also has logout, which creates the expected action', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('has displayNotificationDrawer, which creates the expected action', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('also, surprisingly, has hideNotificationDrawer, which creates the expected action', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
