import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountAside from '../components/ui/AccountAside';

const Account = () => {
    return (
        <div className="mx-5">
            <div className="md:max-w-screen-xl mx-auto grid md:grid-cols-4 grid-cols-1 mt-5">
                <div className="">
                    <AccountAside />
                </div>
                <div className="md:col-span-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Account;
