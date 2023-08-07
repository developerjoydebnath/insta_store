import React from 'react';
import { useNavigate } from 'react-router-dom';
import BellRingingFill from '../../Icons/BellRingingFill';

const Notifications = () => {
    const navigate = useNavigate();

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
        <>
            <div className="cursor-pointer text-base-100 md:flex hidden items-center relative group">
                <span>Notifications</span>
                <span>
                    {notifications !== 0 ? (
                        <BellRingingFill className="fill-white h-4 w-4 gap-1 mt-0.5" />
                    ) : (
                        <BellIconFill className="fill-white h-4 w-4 gap-1 mt-0.5" />
                    )}
                </span>
                <div className="absolute top-full -right-1/2 w-60 z-30 group-hover:visible group-hover:mt-0 group-hover:opacity-100 opacity-0 invisible transition-all mt-3">
                    <div className="mt-1 bg-base-100 rounded-lg drop-shadow-md pb-2 px-4">
                        <div className="">
                            {notifications &&
                                notifications.slice(0, 5).map(({ id, message, seen }) => (
                                    <div
                                        key={id}
                                        className="border-b p-2"
                                        onClick={() => navigate(`/user/account/notifications/${id}`)}
                                    >
                                        <h4 className={`${seen ? 'text-gray-500' : 'text-black'}`}>{message}</h4>
                                    </div>
                                ))}
                        </div>
                        <div
                            className="text-info hover:underline p-1"
                            onClick={() => navigate('/user/account/notifications/0')}
                        >
                            See all notifications
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden cursor-pointer" onClick={() => navigate('/user/account/notifications/0')}>
                <span>
                    {notifications !== 0 ? (
                        <BellRingingFill className="fill-white h-4 w-4 gap-1 mt-0.5" />
                    ) : (
                        <BellIconFill className="fill-white h-4 w-4 gap-1 mt-0.5" />
                    )}
                </span>
            </div>
        </>
    );
};

export default Notifications;
