import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    default: {
        fontSize: 'small',
        color: 'blue',
        '@media (max-width: 900px)': {
            // but when it's small we get big
            fontSize: '20px',
            width: '100%',
            borderBottom: '1px solid black',
            padding: '10px 8px',
            listStyleType: 'none'
        }
    },
    urgent: {
        fontSize: 'small',
        color: 'red',
        '@media (max-width: 900px)': {
            // but when it's small we get big
            fontSize: '20px',
            width: '100%',
            borderBottom: '1px solid black',
            padding: '10px 8px',
            listStyleType: 'none'
        }
    }
});

class NotificationItem extends React.PureComponent {
    render() {
        const { type, html, value, markAsRead, id } = this.props;
        const className = type === 'default' ? styles.default : styles.urgent;
        if (html) {
            return <li className={css(className)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
        } else {
            return <li className={css(className)} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
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
