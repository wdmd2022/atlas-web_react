import * as data from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    // function to take our notifications.json data and return a list
    // containing all the `context` objects where the author id is
    // the same as the `userId`
    const matchingRecords = data.default.filter(record => record.author.id === userId);
    const recordContexts = matchingRecords.map(record => record.context);
    return recordContexts;
}

export default getAllNotificationsByUser;
