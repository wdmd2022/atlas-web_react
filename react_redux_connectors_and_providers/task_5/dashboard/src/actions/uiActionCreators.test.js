import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import fetch from 'node-fetch';

// let's set up a mock redux store and configure it to use
// Redux Thunk as middleware so we can have action creators
// that return async functions to dispatch actions ansynchronously
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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

// describe('the loginRequest async action', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it('upon a successful login request, dispatches LOGIN and LOGIN_SUCCESS', async () => {
//     // let's mock the API response for a successful login
//     fetchMock.getOnce('/login-success.json', {
//       body: { status: 'ok' },
//       headers: { 'content-type': 'application/json' }
//     });
//     const expectedActions = [
//       { type: LOGIN, user: { email: 'dougie@example.com', password: 'pa$$word' } },
//       { type: LOGIN_SUCCESS }
//     ];
//     const fakeStore = mockStore({ isLoggedIn: false });
//     await fakeStore.dispatch(loginRequest('dougie@example.com', 'pa$$word'));
//     expect(fakeStore.getActions()).toEqual(expectedActions);
//   });
// });
