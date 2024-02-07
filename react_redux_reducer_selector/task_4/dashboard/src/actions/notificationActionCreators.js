import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

// the function markAsRead will accept index as an argument
export function markAsRead(index) {
    return {
    type: MARK_AS_READ,
    index,
    };
}

// the function setNotificationFilter will accept filter as an argument
export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
}

// let's put them together so we can bind them
export const notificationActions = {
    markAsRead,
    setNotificationFilter,
};

// now let's bind them
export const boundNotificationActions = (dispatch) => bindActionCreators(notificationActions, dispatch);
