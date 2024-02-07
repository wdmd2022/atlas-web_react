import * as llcooldata from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
    // function to take our notifications.json data and return a list
    // containing all the `context` objects where the author id is
    // the same as the `userId`. Now, using our cool normalized data!
    // the variable names might get a little confusing, so to be clear:
    // allNotifs: all notifications from the normalized data
    // notifsByUser: an array we'll use to store all the notification contexts
    // (i.e., messages) for a given userId
    // notifId: loop variable to represent the current notification's id
    // currentNotif: the notification we're checking in a loop iteration
    // notifContext: what we call the message related to each 'currentNotif'
    // With that all explained, let us begin:
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

export const notificationsNormalizer = (data) => {
    return normalize(data, [notification]);
};
