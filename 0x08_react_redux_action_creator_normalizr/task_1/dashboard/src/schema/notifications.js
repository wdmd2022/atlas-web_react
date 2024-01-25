import * as llcooldata from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
    // function to take our notifications.json data and return a list
    // containing all the `context` objects where the author id is
    // the same as the `userId`
    const matchingRecords = llcooldata.default.filter(record => record.author.id === userId);
    const recordContexts = matchingRecords.map(record => record.context);
    return recordContexts;
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

const normalizedData = normalize(llcooldata.default, [notification]);

export { normalizedData };
