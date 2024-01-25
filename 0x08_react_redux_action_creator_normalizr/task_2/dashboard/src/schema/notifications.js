import * as llcooldata from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
    // function to take our notifications.json data and return a list
    // containing all the `context` objects where the author id is
    // the same as the `userId`. Now, using our cool normalized data!
    // first we grab all the notifications
    const allNotifs = normalizedData.entities.notifications;
    const notifsByUser = [];
    for (let notifId in allNotifs) {
        const currentNotif = allNotifs[notifId]
        if (currentNotif.author === userId) {
            const notifContext = normalizedData.entities.messages[currentNotif.context];
            notifsByUser.push(notifContext);
        }
    }
    return notifsByUser;
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

const normalizedData = normalize(llcooldata.default, [notification]);

export { normalizedData };
