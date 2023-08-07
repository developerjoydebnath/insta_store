import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AllCheckedIcon from '../../Icons/AllCheckedIcon';
import ArrowRightIcon from '../../Icons/ArrowRightIcon';

const NotificationAside = ({ notifications }) => {
    const navigate = useNavigate();
    const [nid, setNid] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const { notificationId } = useParams();
    console.log(isOpen);

    useEffect(() => {
        if (notificationId > 0) {
            // setNid(notificationId);
            setIsOpen(true);
        }
    }, [notificationId]);

    const handleExpanding = (id) => {
        setIsOpen(true);
        setNid(id);
        navigate(`/user/account/notifications/${id}`);
    };

    return (
        <div className="">
            {notifications &&
                notifications.map(({ id, seen }) => (
                    <div
                        key={id}
                        className={`py-3 px-2 cursor-pointer flex items-center justify-between rounded-md hover:bg-red-100 ${
                            isOpen && (nid === id || id === Number(notificationId)) ? 'bg-red-100' : ''
                        }`}
                        onClick={() => handleExpanding(id)}
                    >
                        <div className="flex items-center">
                            {seen ? (
                                <div className="h-2 w-2 bg-primary rounded-full mt-0.5"></div>
                            ) : (
                                <div>
                                    <AllCheckedIcon className="h-4 w-4 fill-green-500 mt-0.5" />
                                </div>
                            )}
                            <h3 className="text-start px-3 text-neutral">Notification</h3>
                        </div>
                        <div>
                            <div>
                                <ArrowRightIcon
                                    className={`h-5 w-5 transition-all ${
                                        isOpen && (nid === id || id === Number(notificationId)) ? 'rotate-90' : ''
                                    } `}
                                />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default NotificationAside;
