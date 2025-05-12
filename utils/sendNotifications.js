const admin = require('firebase-admin')


async function sendPushNotification(deviceToken, messageBody, data, title) {

    const message = {
        notification: {
            title: title,
            body: messageBody
        },
        data: data,
        token: deviceToken
    }

    try {
        await admin.messaging().send(message);
        console.log('Push notification sent successfully');
    } catch (error) {
        console.log('Error sending message:', error);
    }
}


module.exports = sendPushNotification;