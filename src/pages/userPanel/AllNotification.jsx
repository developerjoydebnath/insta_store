import React from 'react';
import NotificationAside from '../../components/ui/NotificationAside';
import NotificationDetails from '../../components/ui/NotificationDetails';
import NotificationsMobile from '../../components/ui/NotificationsMobile';
import Pagination from '../../components/ui/Pagination';
import ProfileHeading from '../../components/ui/ProfileHeading';

const AllNotification = () => {
    const notifications = [
        { id: 1, seen: true, title: 'Notification', message: 'Notification from albert ai' },
        { id: 2, seen: false, title: 'Notification', message: 'Notification from albert ai' },
        { id: 3, seen: false, title: 'Notification', message: 'Notification from albert ai' },
        { id: 4, seen: true, title: 'Notification', message: 'Notification from albert ai' },
        { id: 5, seen: false, title: 'Notification', message: 'Notification from albert ai' },
        { id: 6, seen: false, title: 'Notification', message: 'Notification from albert ai' },
        { id: 7, seen: false, title: 'Notification', message: 'Notification from albert ai' },
        { id: 8, seen: true, title: 'Notification', message: 'Notification from albert ai' },
        { id: 9, seen: false, title: 'Notification', message: 'Notification from albert ai' },
        { id: 10, seen: false, title: 'Notification', message: 'Notification from albert ai' },
        { id: 11, seen: false, title: 'Notification', message: 'Notification from albert ai' },
        { id: 12, seen: true, title: 'Notification', message: 'Notification from albert ai' },
        { id: 13, seen: true, title: 'Notification', message: 'Notification from albert ai' },
    ];

    return (
        <div className="md:ms-5">
            <ProfileHeading heading="Notifications" />
            <div className="md:grid grid-cols-3 md:ms-5 hidden">
                <NotificationAside notifications={notifications} />
                <NotificationDetails notifications={notifications} />
            </div>
            <div className="md:hidden">
                <NotificationsMobile notifications={notifications} />
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    );
};

export default AllNotification;
