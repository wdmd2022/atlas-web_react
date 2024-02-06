import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { bindActionCreators } from 'redux';

// The function login will accept email and password as arguments.
// It will return the action with LOGIN as a type and the user object
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

// The function logout will create the action with the type LOGOUT
export const logout = () => ({
  type: LOGOUT
});

// The function displayNotificationDrawer will create
// the action with the type DISPLAY_NOTIFICATION_DRAWER
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

// The function hideNotificationDrawer will create
// the action with the type HIDE_NOTIFICATION_DRAWER
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

// now let's put them together so we can bind them
export const uiActions = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
};

// and let's actually bind them
export const boundUIActions = (dispatch) => bindActionCreators(uiActions, dispatch);
