import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

// set initial/default state to an object with a blank list of notifications
// and a default filter
const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

// When the action creator sends the action FETCH_NOTIFICATIONS_SUCCESS,
// it also sends the list of notifications in a data attribute.
// The action would look like:
// {
//   type: FETCH_NOTIFICATIONS_SUCCESS,
//   data: [
//     {
//       id: 1,
//       type: "default",
//       value: "New course available"
//     },
//     {
//       id: 2,
//       type: "urgent",
//       value: "New resume available"
//     },
//     {
//       id: 3,
//       type: "urgent",
//       value: "New data available"
//     }
//   ]
// }
// When updating the state of the reducer, you should also set
// the attribute isRead to false for every item in the list.
// When the action creator sends the action MARK_AS_READ,
// it also sends an index corresponding to the id of the notification to update.
// When the action creator sends the action SET_TYPE_FILTER, it also
// sends a filter attribute with either DEFAULT or URGENT.
const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return { ...state, notifications: action.data.map(notification => ({ ...notification, isRead: false})) }
    case MARK_AS_READ:
      return { ...state, notifications: state.notifications.map(notification => notification.id === action.index ? { ...notification, isRead: true } : notification) };
    case SET_TYPE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default notificationReducer;
