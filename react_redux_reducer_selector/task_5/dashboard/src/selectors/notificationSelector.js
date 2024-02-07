// let's make some selectors that will accept the Redux store state
// and return data based on that state. Given that the state is

// this one will return the value of the filter
export const filterTypeSelected = (state) => state.get('filter');

// this one will return the list of notifications
export const getNotifications = (state) => state.get('notifications');

// and this one, just the unread ones.
export const getUnreadNotifications = (state) => {
  const notifsToFilter = state.get('notifications');
  return notifsToFilter.filterNot(notif => notif.get('isRead'));
}
