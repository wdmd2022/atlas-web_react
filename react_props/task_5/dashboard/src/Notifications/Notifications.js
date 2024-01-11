import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer, listNotifications }) {
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
              <NotificationItem key={notification.id} {...notification} />
            ))
          )}
        </ul>
      </div>
    )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;
