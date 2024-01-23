import React from 'react';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
    top: '2%'
  }
})

class Notifications extends React.Component{
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
      <div className={`${css(styles.menuItem)} menu`}>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className={`${css(styles.notificationsPanel)} Notifications`}>
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
