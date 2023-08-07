import React from 'react';
import { useParams } from 'react-router-dom';

const NotificationDetails = ({ notifications }) => {
    const { notificationId } = useParams();
    const matchedNotification = notifications && notifications.find(({ id }) => id === Number(notificationId));

    return (
        <div className="border-l col-span-2 ms-2 ps-5">
            <div className="text-start">
                {matchedNotification ? (
                    <h1>
                        {matchedNotification?.message} {matchedNotification?.id}
                    </h1>
                ) : (
                    <h1>Please select a notification to see details</h1>
                )}
            </div>
        </div>
    );
};

export default NotificationDetails;
