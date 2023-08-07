import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

const User = () => {
    const { pathname } = useLocation();

    return (
        <div>
            {pathname !== '/user/checkout-success' && <Navbar />}
            <Outlet></Outlet>
            {pathname !== '/user/checkout-success' && (
                <h1 className="text-primary xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">this is footer</h1>
            )}
        </div>
    );
};

export default User;
