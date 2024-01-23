import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends React.Component{
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button style={{ position: 'absolute', right:'1px', top: '1px', background: 'transparent', border:'none', padding: '1px' }} aria-label='Close' onClick={() => console.log("Close button has been clicked")}>
            <img src={closeIcon} alt='x' style={{width: '10px'}} />
          </button>
          <p>
            Here is the list of notifications
          </p>
          <ul className="NotificationsList">
            {listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" />) : (
              listNotifications.map(notification => (
                <NotificationItem key={notification.id} id={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} />
              ))
            )}
          </ul>
        </div>
      )}
      </>
    );
  }
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
