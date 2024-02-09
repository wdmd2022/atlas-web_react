import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { bindActionCreators } from 'redux';

// first up are the synchonous action creators:

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


// now let's create an action creator for the login success:
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

// and an action creator for the login failure:
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

// and now we will create an asynchronous action creator
// using Redux-Thunk
// that will dispatch the login action, then fetch our API
// at /login-success.json, then will dispatch either
// the loginSuccess action or the loginFailure action
// depending on whether or not the API fails
export const loginRequest = (email, password) => {
  return async function(dispatch) {
    dispatch(login(email, password));
    return fetch('/login-success.json').then((response) => {
      if (!response.ok) {
        throw new Error('Login failed')
      }
      return response.json();
    }).then((json) => {
      dispatch(loginSuccess());
    }).catch((error) => {
      dispatch(loginFailure());
    });
  };
};

// with our action creators all made...

// now let's put them together so we can bind them
export const uiActions = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest
};

// and let's actually bind them
export const boundUIActions = (dispatch) => bindActionCreators(uiActions, dispatch);
