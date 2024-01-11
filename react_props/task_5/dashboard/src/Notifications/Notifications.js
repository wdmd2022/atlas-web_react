import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
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
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
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
