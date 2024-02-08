import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

// now we use Map from immutable to create Immutable Collections
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      // the set function from Map returns a new Immutable Collection
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      // the set function from Map returns a new Immutable Collection
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      // the set function from Map returns a new Immutable Collection
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      // the set function from Map returns a new Immutable Collection
      return state.set('isUserLoggedIn', false);
    case LOGOUT:
      // the set function from Map returns a new Immutable Collection
      return state.set('isUserLoggedIn', false).set('user', Map({}));
    default:
      return state;
  }
};

export default uiReducer;
