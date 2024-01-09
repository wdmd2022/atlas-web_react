import React from 'react';
import './Notifications.css'
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

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
                <li data-priority="default">
                    New course available
                </li>
                <li data-priority="urgent">
                    New resume available
                </li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}>
                </li>
            </ul>
        </div>
    );
}

export default Notifications;
