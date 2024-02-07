import React from 'react';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
};

const bouncyKeyframes = {
  '0%': {
    transform: 'translateY(0)',
  },
  '25%': {
    transform: 'translateY(-5px)',
  },
  '50%' : {
    transform: 'translateY(0)',
  },
  '75%' : {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(-5px)'
  },
};

const styles = StyleSheet.create({
  notificationsPanel: {
    marginTop: '20px',
    paddingTop: '10px',
    paddingBottom: '25px',
    paddingLeft: '5px',
    paddingRight: '5px',
    border: '2px red dashed',
    position: 'absolute',
    top: '2',
    right: '3%',
    width: '40%',
    height: '10%',
    fontSize: 'calc(6px + 1vmin)',
    '@media (max-width: 900px)': {
      // let's make it big when the screen is small
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      border: 'none',
      fontSize: '20px',
      zIndex: 10,
      overflow: 'auto',
      background: 'white'
    }
  },
  menuItem: {
    marginTop: '0px',
    paddingTop: '0px',
    marginBottom: '5px',
    position: 'absolute',
    right: '5%',
    top: '2%',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, bouncyKeyframes],
      animationDuration: '1s, 500ms',
      animationIterationCount: 3,
    }
  },
  menuItemHidden: {
    display: 'none'
  },
  notificationsList: {
    '@media (max-width: 900px)': {
      padding: 0,
      margin: 0,
      listStyleType: 'none',
      width: '100%'
    }
  }
});

class Notifications extends React.PureComponent{
  constructor(props) {
    super(props);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;
    const menuClassName = displayDrawer ? styles.menuItemHidden : styles.menuItem;
    return (
      <>
      <div className={`${css(menuClassName)} menu`} onClick={handleDisplayDrawer}>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className={`${css(styles.notificationsPanel)} Notifications`}>
          <button style={{ position: 'absolute', right:'1px', top: '1px', background: 'transparent', border:'none', padding: '1px' }} aria-label='Close' onClick={handleHideDrawer}>
            <img src={closeIcon} alt='x' style={{width: '10px'}} />
          </button>
          <p>
            Here is the list of notifications
          </p>
          <ul className={css(styles.notificationsList)}>
            {listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" />) : (
              listNotifications.map(notification => (
                <NotificationItem key={notification.id} id={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={() => markNotificationAsRead(notification.id)} />
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
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

export default Notifications;
