import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpandMore from '../../Icons/ExpandMore';
import { useAuth } from '../../hooks/useAuth';
import Notifications from './Notifications';

const TopNav = () => {
    const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'bdt ৳');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleNavigation = () => {
        if (user) {
            navigate('/user/account');
        } else {
            navigate('/auth/login');
        }
    };

    return (
        <div className="bg-primary">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-0.5 px-2">
                <div>offers will move here </div>
                <div className="flex justify-end items-center gap-2 md:gap-x-5">
                    <span className="cursor-pointer flex items-center relative px-1" onClick={() => setIsOpen(!isOpen)}>
                        <span className="text-base-100">{currency}</span>
                        <ExpandMore className="h-5 w-5 fill-base-100 mt-1" />
                        <div
                            className={`absolute top-full w-full rounded-md drop-shadow-md shadow-gray-300 left-0 bg-base-100 mt-1 p-1 z-40 ${
                                !isOpen && 'hidden'
                            }`}
                        >
                            <h4
                                onClick={() => {
                                    setCurrency('bdt ৳');
                                    localStorage.setItem('currency', 'bdt ৳');
                                }}
                            >
                                bdt ৳
                            </h4>
                            <h4
                                onClick={() => {
                                    setCurrency('usd $');
                                    localStorage.setItem('currency', 'usd $');
                                }}
                            >
                                usd $
                            </h4>
                        </div>
                    </span>
                    <Notifications />
                    <span className="cursor-pointer text-base-100 hidden md:block" onClick={handleNavigation}>
                        {user ? 'Account' : 'Login / Signup'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
