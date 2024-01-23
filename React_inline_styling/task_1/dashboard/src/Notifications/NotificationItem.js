import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css'

class NotificationItem extends React.PureComponent {
    render() {
        const { type, html, value, markAsRead, id } = this.props;
        if (html) {
            return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
        } else {
            return <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
        }
    }
}
NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number
}

NotificationItem.defaultProps = {
    type: "default",
    value: '',
    html: undefined,
    markAsRead: () => {}
};

export default NotificationItem;
