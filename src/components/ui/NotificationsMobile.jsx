import React, { useState } from 'react';
import ExpandMoreCircle from '../../Icons/ExpandMoreCircle';

const NotificationsMobile = ({ notifications }) => {
    const [nid, setNid] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleExpanding = (id) => {
        setIsOpen(true);
        setNid(id);
    };
    return (
        <div>
            {notifications &&
                notifications.map(({ id }) => (
                    <div
                        key={id}
                        className={`border border-blue-200 rounded-lg text-start overflow-hidden mb-5 ${
                            isOpen && nid === id ? 'h-full' : 'h-20'
                        }`}
                    >
                        <div
                            onClick={() => handleExpanding(id)}
                            className="border-b bg-blue-200 p-2 flex justify-between items-center"
                        >
                            <span className="cursor-default">Notification from joy</span>
                            <span className={`transition-all ${isOpen && nid === id ? 'rotate-180' : ''}`}>
                                <ExpandMoreCircle className="h-6 w-6" />
                            </span>
                        </div>
                        <div className="px-2 pb-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro deleniti sed officia ex
                            dolor temporibus inventore obcaecati aliquid. Omnis, delectus repellendus! Dolorem ea
                            reprehenderit, omnis placeat id at mollitia labore tempore error necessitatibus recusandae
                            est adipisci dolore, temporibus delectus itaque nisi accusantium perferendis quaerat?
                            Perferendis suscipit deleniti amet voluptas deserunt.
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default NotificationsMobile;
