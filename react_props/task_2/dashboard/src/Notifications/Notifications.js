import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications() {

    return (
        <div className="Notifications">
            <button style={{ position: 'absolute', right:'1px', top: '1px', background: 'transparent', border:'none', padding: '1px' }} aria-label='Close' onClick={() => console.log("Close button has been clicked")}>
                <img src={closeIcon} alt='x' style={
                    {width: '10px'}
                    } />
            </button>
            <p>
                Here is the list of notifications
            </p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
            </ul>
        </div>
    );
}

export default Notifications;
